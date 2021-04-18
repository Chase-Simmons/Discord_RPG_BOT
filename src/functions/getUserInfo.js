const serverInfo = require('../modules/info');

module.exports = (incomingUser) => {
  let data;
  serverInfo.loggedInUsers.forEach((user) => {
    if (user.id === incomingUser.id) {
      data = user;
    }
  });
  return data;
};
