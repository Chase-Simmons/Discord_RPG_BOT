const serverInfo = require('../modules/info');
const dispatch = require('../re:Discord/.root.js');

function register(content) {
  const [userID, author] = [content.discord_.id, content.discord_.username];
  let match = false;
  let statusCode = 2;
  let reply = {
    title: `${author} has successfully registered.`,
    description: 'Please **login** and **select class** for your character',
    fields: [
      {
        name: '***Classes***',
        value:
          '---> **warrior**\n---> **cleric**\n---> **rogue**\n---> **mage**\n---> **archer**',
        inline: true,
      },
    ],
  };

  serverInfo.allUsers.forEach((user) => {
    if (user.discord_id === userID) {
      match = true;
    }
  });

  if (match === false) {
    dispatch({
      action: 'REGISTER',
      call: 'POST',
      payload: {
        id: userID,
        username: author,
        loginStatus: 'offline',
      },
    });
  } else {
    [reply, statusCode] = [`you are already registered.`, 1];
  }
  return { reply, statusCode };
}

module.exports = (content) => {
  return register(content);
};
