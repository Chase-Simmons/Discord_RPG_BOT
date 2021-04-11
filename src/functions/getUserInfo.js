const fakeDB = require('./fakeDB');

module.exports = (incomingUser) => {
  let data;
  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      data = user;
    }
  });
  return data;
};
