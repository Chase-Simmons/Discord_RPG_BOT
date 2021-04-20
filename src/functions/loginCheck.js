const serverInfo = require('../modules/info');

module.exports = (incomingUser) => {
  rep = false;

  serverInfo.loggedInUsers.forEach((user) => {
    if (user === incomingUser.id) {
      rep = true;
    }
  });

  return rep;
};
