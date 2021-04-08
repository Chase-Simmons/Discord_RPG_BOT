require('dotenv').config('');

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('RPG BOT has successfully booted');
});

client.on('message', (msg) => {
  if (msg.content === 'test') msg.reply('Test successfully completed');
});
