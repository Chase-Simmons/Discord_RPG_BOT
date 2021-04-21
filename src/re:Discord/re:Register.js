const eSQL = require('../modules/eSQL');
const info = require('../modules/info');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;

  switch (call) {
    case 'GET':
      break;
    case 'POST':
      eSQL
        .Insert('users', ['discord_id', 'username', 'online_status'])
        .Values([payload.id, payload.username, payload.loginStatus])
        .Query();
      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
