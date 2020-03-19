const TelegramBot = require('node-telegram-bot-api');

const token = '1040388323:AAF6LzbSrCok-TT8r7xNNPtPdcd46xVMPSQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/booklist/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;


  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "Оно");
  bot.sendMessage(chatId, "Сияние");
}),

bot.onText(/\/authorlist/, (msg, match) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Стивен Кинг");
});