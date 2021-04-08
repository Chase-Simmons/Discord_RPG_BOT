require('dotenv').config('');

const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require('./functions/commands');
const reduceMessage = require('./functions/reduceMessage');

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('RPG BOT has successfully booted');
});

client.on('message', (msg) => {
  msg.content = msg.content.toLowerCase();

  if (msg.content[0] + msg.content[1] + msg.content[2] !== 'rpg') return;

  const content = {
    user: {
      id: msg.author.id,
      username: msg.author.username,
      discriminator: msg.author.discriminator,
    },
    msg: reduceMessage(msg.content),
  };

  commands(content);
  // if (msg.content === 'test') msg.reply('Test successfully completed');
});
