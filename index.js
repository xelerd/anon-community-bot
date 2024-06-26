const { Telegraf, Markup } = require("telegraf");
const cfg = require("./cfg")

const bot = new Telegraf(cfg.token);

bot.start(ctx => ctx.reply(`Hi.`, {parse_mode: "Markdown"}));

bot.command(`id`, async ctx => {

    let text = ctx.message.is_topic_message ? `Telegram ID этого чата: \`${ctx.message.chat.id}\`\nTelegram ID этого топика: \`${ctx.message.message_thread_id}\`` : `Telegram ID этого чата: \`${ctx.message.chat.id}\``

    await ctx.telegram.sendMessage(ctx.message.chat.id, text, {parse_mode: "Markdown", reply_markup: { remove_keyboard: true }})

});

bot.launch();