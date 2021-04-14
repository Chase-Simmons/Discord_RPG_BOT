const express = require('express');
const pool = require('../modules/pool');
const info = require('../modules/info');

const router = express.Router();

router.put('/login/:id', (req, res) => {
  const discordID = req.params.id;
  queryText = `UPDATE "users" SET "online_status" = 'online' WHERE "discord_id" = $1;`;
  pool
    .query(queryText, [discordID])
    .then(() => {
      info.loggedInUsers.push(discordID);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Error during **USER LOGIN** [USER ID] [${discordID}]`, err);
      res.sendStatus(500);
    });
});

router.put('/logout/:id', (req, res) => {
  const discordID = req.params.id;
  queryText = `UPDATE "users" SET "online_status" = 'offline' WHERE "discord_id" = $1;`;
  pool
    .query(queryText, [discordID])
    .then(() => {
      info.loggedInUsers.filter((userID) => userID !== discordID);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Error during **USER LOGOUT** [USER ID] [${discordID}]`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
