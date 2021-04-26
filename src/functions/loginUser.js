const dispatch = require('../re:Discord/.root.js');

function loginUser(incomingUser) {
  let reply;
  console.table(incomingUser);

  if (incomingUser !== false) {
    if (incomingUser.online_status === 'offline') {
      incomingUser.online_status = 'online';
      reply = 'has successfully logged in.';
      dispatch({
        action: 'LOGIN',
        call: 'PUT',
        payload: incomingUser.discord_id,
      });
    } else {
      reply = 'you are currently logged in. There is no need to log in again.';
    }
  } else {
    reply = `I could not find your account. Have you done **register** yet`;
  }
  return { reply, statusCode: 1 };
}

module.exports = (incomingUser) => {
  return loginUser(incomingUser);
};
