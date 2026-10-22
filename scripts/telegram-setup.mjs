// Points the Telegram bot at the site's webhook and adds the /export command to its menu.
// Run once after deploying (and again if GHOST_SECRET or the domain changes):
//   TELEGRAM_BOT_TOKEN=... GHOST_SECRET=<production value> node scripts/telegram-setup.mjs [https://recursekmit.in]
import { createHmac } from "node:crypto";

const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
const secret = process.env.GHOST_SECRET?.trim();
const site = (process.argv[2] || "https://recursekmit.in").replace(/\/$/, "");
if (!token || !secret) {
  console.error("Set TELEGRAM_BOT_TOKEN and GHOST_SECRET (the production values).");
  process.exit(1);
}

// Same derivation as webhookSecret() in worker/telegram.js.
const secretToken = createHmac("sha256", secret).update("telegram-webhook").digest("hex");

async function call(method, body) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  console.log(`${method}: ${result.ok ? "ok" : result.description}`);
  if (!result.ok) process.exitCode = 1;
}

await call("setWebhook", {
  url: `${site}/api/telegram/webhook`,
  secret_token: secretToken,
  allowed_updates: ["message", "callback_query"],
  drop_pending_updates: true,
});
await call("setMyCommands", { commands: [{ command: "export", description: "PDF of all Ghost Process completions" }] });
