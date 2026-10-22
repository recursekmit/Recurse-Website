// Cloudflare Pages entry for the Telegram bot webhook (the Workers deployment uses worker/index.js).
import { handleTelegram } from "../../../worker/telegram.js";

export const onRequest = (context) => handleTelegram(context.request, context.env);
