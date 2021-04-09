const fakeDB = require('./fakeDB');

function logoutUser(incomingUser) {
  let match = false;
  let rep = 'has successfully logged out.';

  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      if (user.loginStatus === 'online') {
        user.loginStatus = 'offline';
      } else {
        rep = 'you are not currently logged in. There is no need to log out.';
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
  return logoutUser(incomingUser);
};
