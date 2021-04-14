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
      queryText = `UPDATE "users" SET "online_status" = 'online' WHERE "discord_id" = $1;`;

      pool
        .query(queryText, [payload])
        .then(() => {
          info.loggedInUsers.push(payload);
        })
        .catch((err) => {
          console.log(
            `Error during **USER LOGIN** [USER ID] [${payload}]`,
            err
          );
        });
      break;
  }
};
