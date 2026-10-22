// Telegram side of Ghost Process: solve alerts out, and an "Export completions" button in.
//
// The bot's webhook (POST /api/telegram/webhook, registered by scripts/telegram-setup.mjs) only
// acts on requests carrying the secret token derived from GHOST_SECRET, and only for
// TELEGRAM_CHAT_ID. Everyone else gets silence.
import { completionsPdf } from "./pdf.js";

export const exportLabel = "📄 Export completions";
const exportButton = { inline_keyboard: [[{ text: exportLabel, callback_data: "export" }]] };
const exportKeyboard = { keyboard: [[{ text: exportLabel }]], resize_keyboard: true, is_persistent: true };

const config = (env) => ({ token: env.TELEGRAM_BOT_TOKEN?.trim(), chatId: env.TELEGRAM_CHAT_ID?.trim() });

async function call(env, method, body) {
  const { token } = config(env);
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    ...(body instanceof FormData
      ? { body }
      : { headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }),
  });
  if (!response.ok) console.error(`[ghost] Telegram ${method} error`, response.status, await response.text());
  return response.ok;
}

export async function notifyTelegram(env, text) {
  const { token, chatId } = config(env);
  if (!token || !chatId) {
    console.warn("[ghost] Telegram is not configured; skipping notification:\n" + text);
    return;
  }
  try {
    await call(env, "sendMessage", { chat_id: chatId, text, disable_web_page_preview: true, reply_markup: exportButton });
  } catch (error) {
    console.error("[ghost] Telegram request failed", error);
  }
}

// Hex HMAC of a fixed label, so the webhook secret needs no extra configuration.
export async function webhookSecret(secret) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const bytes = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("telegram-webhook")));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function sameText(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function sendExport(env) {
  const { chatId } = config(env);
  const { results } = await env.GHOST_DB.prepare(
    "SELECT roll, key, code, solved_at, failed_attempts FROM ghost_players WHERE solved_at IS NOT NULL ORDER BY solved_at",
  ).all();
  const { players } = await env.GHOST_DB.prepare("SELECT COUNT(*) AS players FROM ghost_players").first();

  const now = new Date();
  const date = now.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const form = new FormData();
  form.append("chat_id", chatId);
  form.append("caption", `${results.length} completion${results.length === 1 ? "" : "s"} out of ${players} player${players === 1 ? "" : "s"}.`);
  form.append("document", new File([completionsPdf(results, players, now)], `ghost-process-completions-${date}.pdf`, { type: "application/pdf" }));
  form.append("reply_markup", JSON.stringify(exportKeyboard));
  await call(env, "sendDocument", form);
}

export async function handleTelegram(request, env) {
  const ok = new Response("ok");
  const { token, chatId } = config(env);
  if (request.method !== "POST" || !token || !chatId || !env.GHOST_SECRET || !env.GHOST_DB) return ok;

  const given = request.headers.get("X-Telegram-Bot-Api-Secret-Token") || "";
  if (!sameText(given, await webhookSecret(env.GHOST_SECRET))) return new Response("Forbidden", { status: 403 });

  let update;
  try {
    update = await request.json();
  } catch {
    return ok;
  }

  const message = update.message;
  const callback = update.callback_query;
  const from = String(message?.chat?.id ?? callback?.message?.chat?.id ?? "");
  // Always answer Telegram with 200 so it doesn't retry; act only for the configured chat.
  if (from !== chatId) return ok;

  try {
    if (callback) {
      await call(env, "answerCallbackQuery", { callback_query_id: callback.id, text: "Preparing PDF…" });
      if (callback.data === "export") await sendExport(env);
    } else if (message?.text) {
      const text = message.text.trim();
      if (text === exportLabel || /^\/export(@\w+)?$/i.test(text)) await sendExport(env);
      else if (/^\/(start|help)(@\w+)?$/i.test(text))
        await call(env, "sendMessage", {
          chat_id: chatId,
          text: "Recurse Ghost Process bot.\n\nSolve alerts arrive here. Tap the button below (or send /export) for a PDF of every completion.",
          reply_markup: exportKeyboard,
        });
    }
  } catch (error) {
    console.error("[ghost] Telegram webhook failed", error);
  }
  return ok;
}
