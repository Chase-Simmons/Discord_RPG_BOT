const serverInfo = require('../modules/info');
const dispatch = require('../re:Discord/.root.js');

function register(incomingUser) {
  let match = false;
  let statusCode = 2;
  let reply = {
    title: `${incomingUser.username} has successfully registered.`,
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
    if (user.id === incomingUser.id) {
      match = true;
    }
  });

  if (match === false) {
    dispatch({
      action: 'REGISTER',
      call: 'POST',
      payload: {
        id: incomingUser.id,
        username: incomingUser.username,
        loginStatus: 'offline',
      },
    });

    // create(incomingUser);
  } else {
    [reply, statusCode] = [`you are already registered.`, 1];
  }
  return { reply, statusCode };
}

module.exports = (incomingUser) => {
  return register(incomingUser);
};
