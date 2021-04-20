const serverInfo = require('../modules/info');
const dispatch = require('../re:Discord/.root.js');

function register(incomingUser) {
  let match = false;
  let rep = {
    content: {
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
    },
    statusCode: 2,
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
    rep = { content: `you are already registered.`, statusCode: 1 };
  }
  return rep;
}

module.exports = (incomingUser) => {
  return register(incomingUser);
};
