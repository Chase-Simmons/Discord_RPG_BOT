const serverInfo = require('../modules/info');
const dispatch = require('../re:Discord/.root.js');

function loginUser(incomingUser) {
  let match = false;
  let rep = 'has successfully logged in.';

  const users = serverInfo.allUsers;

  users.forEach((user) => {
    if (user.discord_id === incomingUser.id) {
      if (user.online_status === 'offline') {
        user.online_status = 'online';
        dispatch({ action: 'LOGIN', call: 'PUT', payload: user.discord_id });
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
