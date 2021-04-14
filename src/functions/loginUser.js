const fakeDB = require('./fakeDB');
const serverInfo = require('../../server/modules/info');
const dispatch = require('../re:Discord/.root.js');

function loginUser(incomingUser) {
  let match = false;
  let rep = 'has successfully logged in.';

  const users = serverInfo.loggedInUsers;
  console.log(users);

  users.forEach((user) => {
    if (user.id === incomingUser.id) {
      if (user.loginStatus === 'offline') {
        user.loginStatus = 'online';
        dispatch({ action: 'LOGIN', call: 'PUT', payload: user.id });
        console.log(user);
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
