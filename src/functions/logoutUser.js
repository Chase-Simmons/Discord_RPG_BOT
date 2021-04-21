const User = require('../modules/User');
const dispatch = require('../re:Discord/.root.js');

function logoutUser(incomingUser) {
  let rep = 'has successfully logged out.';
  const user = User.GetInfo(incomingUser.id);

  if (user !== false) {
    if (user.online_status === 'online') {
      user.online_status = 'offline';
      dispatch({ action: 'LOGOUT', call: 'PUT', payload: user.discord_id });
    } else {
      rep = 'you are not currently logged in. There is no need to log out.';
    }
  } else {
    rep = `I could not find your account. Have you done **register** yet`;
  }
  return rep;
}

module.exports = (incomingUser) => {
  return logoutUser(incomingUser);
};
