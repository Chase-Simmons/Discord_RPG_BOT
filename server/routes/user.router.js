const express = require('express');
const pool = require('../modules/pool');
const info = require('../modules/info');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('in');
  queryText = `SELECT * FROM "users";`;
  pool
    .query(queryText)
    .then((response) => {
      info.allUsers = [...response.rows];
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Error during **GET USERS**`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
