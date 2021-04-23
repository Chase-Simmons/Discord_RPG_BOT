const eSQL = require('../modules/eSQL');
const User = require('../modules/User');
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
        .Update('character_locations')
        .Set('map', payload.location)
        .Where('discord_id', payload.user)
        .Query()
        .Then((res) => {
          User.GetInfo(payload.user).map = payload.location;
          console.table(User.GetInfo(payload.user));
        });
      break;
  }
};
