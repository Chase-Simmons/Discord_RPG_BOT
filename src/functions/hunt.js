const getLocalMobs = require('./Core/getLocalMobs');

function hunt(incomingUser) {
  const localMobs = getLocalMobs(incomingUser);
}

module.exports = (incomingUser) => {
  return hunt(incomingUser);
};
