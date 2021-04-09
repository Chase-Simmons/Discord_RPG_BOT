const fakeDB = require('./fakeDB');

function loginUser(incomingUser) {
  let match = false;
  let rep = 'has successfully logged in.';

  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      if (user.loginStatus === 'offline') {
        user.loginStatus = 'online';
      } else {
        rep = 'you are currently logged in. There is no need to log in again.';
      }
      match = true;
    }
  });

  if (match === false) {
    rep = `I could not find your account. Have you done **register** yet`;
  }
  return rep;
}

module.exports = (incomingUser) => {
  return loginUser(incomingUser);
};
