const User = require('../modules/User');
const dispatch = require('../re:Discord/.root.js');

function loginUser(incomingUser) {
  let rep = 'has successfully logged in.';
  const user = User.GetInfo(incomingUser.id);

  if (user !== false) {
    if (user.online_status === 'offline') {
      user.online_status = 'online';
      dispatch({ action: 'LOGIN', call: 'PUT', payload: user.discord_id });
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
