const serverInfo = require('../modules/info');
const dispatch = require('../re:Discord/.root.js');

function logoutUser(incomingUser) {
  let match = false;
  let rep = 'has successfully logged out.';

  const users = serverInfo.allUsers;

  users.forEach((user) => {
    if (user.discord_id === incomingUser.id) {
      if (user.online_status === 'online') {
        user.online_status = 'offline';
        dispatch({ action: 'LOGOUT', call: 'PUT', payload: user.discord_id });
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
