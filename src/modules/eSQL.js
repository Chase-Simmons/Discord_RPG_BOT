const pool = require('./pool');

// queryText = `UPDATE "users" SET "online_status" = 'online' WHERE "discord_id" = $1;`;

// pool
//   .query(queryText, [payload])
//   .then(() => {
//     info.loggedInUsers.push(payload);
//   })
//   .catch((err) => {
//     console.log(`Error during **USER LOGIN** [USER ID] [${payload}]`, err);
//   });

class eSQL {
  Query(create, insert) {
    create: create || false;
    return this;
  }

  Create() {
    console.log('create');
    return this;
  }

  Insert() {
    console.log('insert');
    return this;
  }
}
module.exports = new eSQL();
