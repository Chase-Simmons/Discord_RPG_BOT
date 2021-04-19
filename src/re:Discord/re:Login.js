const info = require('../modules/info');
const eSQL = require('../modules/eSQL');

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
        .Set('online_status', 'online')
        .Where('discord_id', payload)
        .Query()
        .Then((res) => {
          console.log(res);
        });

      break;
  }
};
