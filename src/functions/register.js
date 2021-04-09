const fakeDB = require('./fakeDB');

function register(incomingUser) {
  let match = false;
  let rep =
    'has successfully registered. Please **login** and **create** a character';

  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      match = true;
    }
  });

  if (match === false) {
    fakeDB.push({
      id: incomingUser.id,
      username: incomingUser.username,
      loginStatus: 'offline',
    });
  } else {
    rep = `you are already registered.)`;
  }
  return rep;
}

module.exports = (incomingUser) => {
  return register(incomingUser);
};
