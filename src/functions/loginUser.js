const fakeDB = [
  {
    id: '135231585480867840',
    username: 'nowimgone',
  },
  {
    id: '1',
    username: 'admin',
  },
  {
    id: '2',
    username: 'mod',
  },
];

function loginUser(incomingUser) {
  let match = false;
  let rep = 'has successfully logged in.';
  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      match = true;
    }
  });

  if (match === false) {
    rep = 'no matches found. Have you done `rpg register` yet?';
  }
  return rep;
}

module.exports = (incomingUser) => {
  return loginUser(incomingUser);
};
