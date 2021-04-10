const fakeDB = require('./fakeDB');

module.exports = (incomingUser) => {
  rep = false;
  if (user.id === incomingUser.id) {
    if (user.loginStatus === 'online') rep = true;
  }
  return rep;
};
