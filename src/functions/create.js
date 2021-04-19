const serverInfo = require('../modules/info');

function createCharacter(incomingUser) {
  serverInfo.allUsers.forEach((user) => {
    if (user.id === incomingUser.id) {
      match = true;

      user.character = {
        class: null,
        stats: {},
      };
    }
  });
}

module.exports = (incomingUser) => {
  createCharacter(incomingUser);
};
