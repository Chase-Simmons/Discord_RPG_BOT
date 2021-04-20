const eSQL = require('../modules/eSQL');
const info = require('../modules/info');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;

  switch (call) {
    case 'GET':
      break;
    case 'GET_ALL':
      eSQL
        .Select('*')
        .From('users')
        .Query()
        .Then((response) => {
          info.allUsers = [...response.rows];
        });
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
