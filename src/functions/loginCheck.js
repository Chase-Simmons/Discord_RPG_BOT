const serverInfo = require('../modules/info');

module.exports = (incomingUser) => {
  rep = false;

  serverInfo.loggedInUsers.forEach((user) => {
    if (user.id === incomingUser.id) {
      if (user.loginStatus === 'online') rep = true;
    }
  });

  return rep;
};
