const dispatch = require('../re:Discord/.root.js');

function loginUser(incomingUser) {
  let rep;
  console.table(incomingUser);

  if (incomingUser !== false) {
    if (incomingUser.online_status === 'offline') {
      incomingUser.online_status = 'online';
      rep = 'has successfully logged in.';
      dispatch({
        action: 'LOGIN',
        call: 'PUT',
        payload: incomingUser.discord_id,
      });
    } else {
      rep = 'you are currently logged in. There is no need to log in again.';
    }
  } else {
    rep = `I could not find your account. Have you done **register** yet`;
  }
  return rep;
}

module.exports = (incomingUser) => {
  return loginUser(incomingUser);
};
