function makeEmbed(content) {
  // console.log(
  //   `https://discord.com/api/avatars/${content.user.id}/${content.user.avatar}.png`
  // );
  return {
    embed: {
      color: 3447003,
      author: {
        name: content.user.username,
        // icon_url: `https://discord.com/api/avatars/${content.user.id}/${content.user.avatar}.png`,
      },
      title: content.reply.title,
      description: content.reply.description,
      fields: content.reply.fields,
      timestamp: new Date(),
      footer: {
        // icon_url: content.user.avatar,
        text: '© RPG BOT, By Gone.',
      },
    },
  };
}

module.exports = (content) => {
  return makeEmbed(content);
};
