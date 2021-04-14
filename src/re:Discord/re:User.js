const pool = require('../modules/pool');
const info = require('../modules/info');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;
  let queryText;

  switch (call) {
    case 'GET':
      queryText = `SELECT * FROM "users";`;

      pool
        .query(queryText)
        .then((response) => {
          info.allUsers = [...response.rows];
        })
        .catch((err) => {
          console.log(`Error during **GET USERS**`, err);
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
