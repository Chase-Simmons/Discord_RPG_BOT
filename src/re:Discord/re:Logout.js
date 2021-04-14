const pool = require('../modules/pool');
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
      queryText = `UPDATE "users" SET "online_status" = 'offline' WHERE "discord_id" = $1;`;

      pool
        .query(queryText, [payload])
        .then(() => {
          info.loggedInUsers.filter((userID) => userID !== payload);
        })
        .catch((err) => {
          console.log(
            `Error during **USER LOGOUT** [USER ID] [${payload}]`,
            err
          );
        });
      break;
    case 'PUT_ALL':
      console.log('Logging out all users');
      queryText = `UPDATE "users" SET "online_status" = 'offline' WHERE "online_status" = 'online';`;

      pool
        .query(queryText)
        .then(() => {})
        .catch((err) => {
          console.log(`Error during **ALL USER LOGOUT**`, err);
        });
      break;
  }
};
