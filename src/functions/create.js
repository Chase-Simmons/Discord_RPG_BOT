const fakeDB = require('./fakeDB');

function createCharacter(incomingUser) {
  fakeDB.forEach((user) => {
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
