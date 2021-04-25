module.exports = ({ msg, res, embed }) => {
  switch (res.statusCode) {
    case 0:
      msg.channel.send(res.reply);
      break;
    case 1:
      msg.reply(res.reply);
      break;
    case 2:
      embed
        .setAuthor(
          msg.author.username,
          `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png?=512`
        )
        .setTitle(res.reply.title)
        .setColor(3447003)
        .addFields(res.reply.fields)
        .setTimestamp(new Date())
        .setFooter(
          '© RPG BOT, By Gone.',
          `https://cdn.discordapp.com/avatars/${process.env.BOT_ID}/${process.env.BOT_AVATAR}.png?=512`
        );

      if (res.reply.description !== undefined) {
        embed.setDescription(res.reply.description);
      }

      msg.channel.send(embed);

      break;
    case 3:
      embed
        .setAuthor(
          msg.author.username,
          `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png?=512`
        )
        .setTitle(res.reply.title)
        .setColor(3447003)
        .setThumbnail(
          `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png?=512`
        )
        .addFields(res.reply.fields)
        .setTimestamp(new Date())
        .setFooter(
          '© RPG BOT, By Gone.',
          `https://cdn.discordapp.com/avatars/${process.env.BOT_ID}/${process.env.BOT_AVATAR}.png?=512`
        );

      if (res.reply.description !== undefined) {
        embed.setDescription(res.reply.description);
      }

      msg.channel.send(embed);

      break;
  }
};
