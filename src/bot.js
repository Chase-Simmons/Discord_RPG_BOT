require('dotenv').config('');

const Discord = require('discord.js');
const client = new Discord.Client();
const dispatch = require('./re:Discord/.root.js');
const botResponses = require('./botResponses');
const commands = require('./functions/.commands');
const reduceMessage = require('./functions/reduceMessage');

let embed;

client.login(process.env.BOT_TOKEN);

//READY
client.on('ready', () => {
  onReady();
  console.log('RPG BOT has successfully booted');
});

//MESSAGE
client.on('message', (msg) => {
  embed = new Discord.MessageEmbed();
  msg.content = msg.content.toLowerCase();
  if (msg.content.split(' ')[0] !== 'rpg') return;

  const content = {
    user: msg.author,
    msg: reduceMessage(msg.content),
  };

  const res = commands(content);

  botResponses({ msg, res, embed });
});

function onReady() {
  dispatch({ action: 'LOGOUT', call: 'PUT_ALL', payload: '' });
  dispatch({ action: 'USER', call: 'GET_ALL', payload: '' });
}
