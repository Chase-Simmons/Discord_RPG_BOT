const dispatch = require('../re:Discord/.root.js');

function logoutUser(incomingUser) {
  let rep;

  if (incomingUser !== false) {
    if (incomingUser.online_status === 'online') {
      incomingUser.online_status = 'offline';
      rep = 'has successfully logged out.';
      dispatch({
        action: 'LOGOUT',
        call: 'PUT',
        payload: incomingUser.discord_id,
      });
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
