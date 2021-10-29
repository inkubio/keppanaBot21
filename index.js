'use strict'
require('dotenv').config();
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TELEGRAM_TOKEN);
const destGroupId = process.env.GROUP_ID;
let taulukko = [];

bot.on('/help', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('Kirjota uusi keppanaennätys muodossa:\n/uusiennatys <Nikki> <Ennätys> <Määrä>\n\n\nLaita mulle privaviesti niin välitän keppanachättiin. Vain teksti tuettu eli älä yritä laittaa kuvii, stikui tai gifei yms.');
});

bot.on('/lisaa', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('🔥Ja kovempaa🔥😉!');
});

bot.on('/kokista', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.audio("CQACAgIAAxkBAANeYXLk_hVPD5RyVN3E9-fERRiMdr4AAg4VAAK_BrFJOwbZHZOcUD4hBA");
});

bot.on('/salamoi', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.audio("CQACAgIAAxkBAAOaYXf9lNSCxuriR7mDokGrB7E1jGQAAuMGAAI_BPFJrkA1R1S730shBA");
});

bot.on('/piiskattaa', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.audio("CQACAgIAAxkBAAOZYXf8_CrY_kczbpHSYwdbuKOQPVwAAuwfAAIZQhBLLJ79a8Qf7iYhBA");
});

bot.on('/sajuot', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('Kokista!🥳');
}); 

bot.on(/^\/uusiennatys (.+)$/, (msg) => {
  let textArr = msg.text.split(" ");
  console.log(textArr.length);
  if(textArr.length == 4 && (taulukko.length < 999)) {
    let arvot = textArr.slice(1,4);
    taulukko.push(arvot);
    if (msg.chat && msg.chat.id < 0) {
      return msg.reply.text("🔥🔥🔥UUSI ENNÄTYS🔥🔥🔥\n\nNikki: " + arvot[0] + "\nEnnätys:  " + arvot[1] + "\nMäärä:  " + arvot[2]);
    }
    else {
      return bot.sendMessage(destGroupId, ("🔥🔥🔥UUSI ENNÄTYS🔥🔥🔥\n\nNikki: " + arvot[0] + "\nEnnätys:  " + arvot[1] + "\nMäärä:  " + arvot[2]))
    }
  } 
  else {
    return msg.reply.text("Kirjota uusi ennätys muodossa:\n\n" + "/uusiennatys <Nikki> <Ennätys> <Määrä>");
  }
}); 

bot.on('/ennatykset', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  console.table(taulukko);
  let arvot = "✨✨✨ENNÄTYSTAULUKKO✨✨✨\n\n";
  for (let i = 0; i < taulukko.length; i++) {
    let rivi = taulukko[i][0].toString() + "    " + taulukko[i][1].toString() + "   " + taulukko[i][2].toString() + "\n";
    console.log(rivi.toString());
    arvot = arvot.concat(rivi.toString())
  }
  arvot = arvot.concat("\nEnnätysten määrä: " + taulukko.length);
  console.log(arvot.toString());
  return msg.reply.text(arvot.toString());
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

bot.on('/poistakaikkipliis', msg => {
  if (msg.chat) {
    console.log('Kaikki poistettu')
  }
  taulukko = [];
  return msg.reply.text('Kaikki poistettu');
});

bot.on('/poistavikapliis', msg => {
  if (msg.chat) {
    console.log('Kaikki poistettu')
  }
  taulukko.pop();
  return msg.reply.text('Kaikki poistettu');
}); 

console.log('Listening')
bot.connect();
