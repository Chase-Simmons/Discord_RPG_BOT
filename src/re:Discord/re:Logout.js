const eSQL = require('../modules/eSQL');
const info = require('../modules/info');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;

  switch (call) {
    case 'GET':
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
    case 'PUT':
      eSQL
        .Update('users')
        .Set('online_status', 'offline')
        .Where('discord_id', payload)
        .Query()
        .Then(() => {
          info.loggedInUsers.filter((userID) => userID !== payload);
        });

      break;
    case 'PUT_ALL':
      eSQL
        .Update('users')
        .Set('online_status', 'offline')
        .Where('online_status', 'online')
        .Query();
      break;
  }
};
