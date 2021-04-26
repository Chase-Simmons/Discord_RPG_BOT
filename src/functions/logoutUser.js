const dispatch = require('../re:Discord/.root.js');

function logoutUser(incomingUser) {
  let reply;

  if (incomingUser !== false) {
    if (incomingUser.online_status === 'online') {
      incomingUser.online_status = 'offline';
      reply = 'has successfully logged out.';
      dispatch({
        action: 'LOGOUT',
        call: 'PUT',
        payload: incomingUser.discord_id,
      });
    } else {
      reply = 'you are not currently logged in. There is no need to log out.';
    }
  } else {
    reply = `I could not find your account. Have you done **register** yet`;
  }
  return { reply, statusCode: 1 };
}

module.exports = (incomingUser) => {
  return logoutUser(incomingUser);
};
