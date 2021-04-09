require('dotenv').config('');

const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require('./functions/commands');
const reduceMessage = require('./functions/reduceMessage');
const makeEmbed = require('./functions/makeEmbed');

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('RPG BOT has successfully booted');
});

client.on('message', (msg) => {
  // console.log(msg); /* DEBUGGER */

  msg.content = msg.content.toLowerCase();

  if (msg.content[0] + msg.content[1] + msg.content[2] !== 'rpg') return;

  const content = {
    user: msg.author,
    msg: reduceMessage(msg.content),
  };

  const res = commands(content);

  switch (res.statusCode) {
    case 0:
      msg.channel.send(res.reply);
      break;
    case 1:
      const embedMessage = makeEmbed({ user: msg.author, reply: res.reply });
      msg.channel.send(embedMessage);
      break;
    case 2:
      msg.reply(res.reply);
      break;
  }
});
