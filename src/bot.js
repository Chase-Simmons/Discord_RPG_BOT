require('dotenv').config('');

const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();

const commands = require('./functions/.commands');
const reduceMessage = require('./functions/reduceMessage');

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
      msg.channel.send(
        embed
          .setTitle(res.reply.title)
          .setColor(3447003)
          .setThumbnail(
            `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png?=512`
          )
          .setDescription(res.reply.description)
          .addFields(res.reply.fields)
          .setTimestamp(new Date())
          .setFooter(
            '© RPG BOT, By Gone.',
            `https://cdn.discordapp.com/avatars/${process.env.BOT_ID}/${process.env.BOT_AVATAR}.png?=512`
          )
      );
      embed.fields = []; // Clean up Fields
      break;
    case 2:
      msg.reply(res.reply);
      break;
  }
});
