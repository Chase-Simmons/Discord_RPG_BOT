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
  fakeDB.forEach((user) => {
    if (user.id === incomingUser.id) {
      match = true;
    }
  });
  return match;
}

module.exports = (incomingUser) => {
  return loginUser(incomingUser);
};
