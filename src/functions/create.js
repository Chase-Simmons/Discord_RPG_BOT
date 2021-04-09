const fakeDB = require('./fakeDB');

function createCharacter(incomingUser) {
  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      user.character = {};
    }
  });
}

module.exports = (incomingUser) => {
  createCharacter(incomingUser);
};
