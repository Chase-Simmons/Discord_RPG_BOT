const fakeDB = require('./fakeDB');
const roll = require('./rollBonusStats');

function createCharacter(incomingUser) {
  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      match = true;

      user.character = {
        class: null,
        stats: {},
        bonus: roll(),
      };
    }
  });
}

module.exports = (incomingUser) => {
  createCharacter(incomingUser);
};
