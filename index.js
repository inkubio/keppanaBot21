'use strict'

const TeleBot = require('telebot');
const bot = new TeleBot('2050799354:AAE4aOomrBu7P10wvdTw2S2aSm3trXu_bvM');

const destGroupId = '-1001616598870'

bot.on('/help', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('Laita mulle privaviesti niin välitän keppanachättiin anonyymisti. Vain teksti älä yritä laittaa kuvii, stikui tai gifei yms. ');
});

bot.on('/lisaa', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('Ja kovempaa 😉!');
});

bot.on('/sajuot', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('Kokista!🥳');
});

bot.on(/\/*./, msg => {
  console.log('jii')
})

bot.on('text', msg => {
  if (msg.text && msg.text.startsWith('/')) {
    return
  }
  if (msg.chat && msg.chat.id < 0) {
    console.log(msg.chat.id)
  }
  else {
    let text = msg.text;
    if (text === 'Hello, World!') {
      text = `Ime Slaikkuu ${msg.from.first_name}`;
      return msg.reply.text(text)
    }
    else {
      return bot.sendMessage(destGroupId, text);
    }
  }
});

bot.on('sticker', msg => {
  if (!msg.chat) {
    return msg.reply.text('Sori ei stickereitä')
  }
  else {
    console.log(msg.chat.id)
  }
})


console.log('Listening')
bot.connect();
