// HOW TO USE :
// .Create(what) takes in a "what" to create
// .Insert(what) takes in a "what" to insert
// .Update(what) takes in a "what" to update
// .Delete(what) takes in a "what" to delete
// .Set({what, to}) takes in a "what", "to" set
// .Where({what, is}) takes in a "what", "is" equal to
// .Query() must be performed after all the query params are called
// .Then() can be called after Query() to grab the response
//

const pool = require('./pool');

let queryObj = {};
let queryText = '';

let response;

function startQuery() {
  queryText += ';';

  console.log(queryText);

  Pool(queryText);
  queryCleanup();
}

function SelectMapping(what) {
  if (what === '*') {
    queryText += `SELECT ${what}`;
  } else {
    queryText += `SELECT "${what}"`;
  }
}
function Pool(queryText) {
  pool
    .query(queryText)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      console.log(err);
    });
}

function queryCleanup() {
  queryObj = {};
  queryText = '';
}

class eSQL {
  Create(what = '') {
    queryText += `CREATE "${what}"`;
    return this;
  }
  Insert(what = '') {
    queryText += `INSERT "${what}"`;
    return this;
  }
  Update(what = '') {
    queryText += `UPDATE "${what}"`;
    return this;
  }
  Delete(what = '') {
    queryText += `DELETE "${what}"`;
    return this;
  }
  Select(what = '') {
    SelectMapping(what);
    return this;
  }
  Set(what = '', to = '') {
    queryText += ` SET "${what}" = '${to}'`;
    return this;
  }
  Where(where = '', is = '') {
    queryText += ` WHERE "${where}" = '${is}'`;
    return this;
  }
  From(from = '') {
    queryText += ` FROM "${from}"`;
    return this;
  }
  Query() {
    startQuery();
    return this;
  }
  Then(F) {
    function waitForResponse() {
      if (response === undefined) {
        setTimeout(() => {
          waitForResponse();
        }, 500);
      } else {
        F(response);
      }
    }
    waitForResponse();
    return;
  }
}
module.exports = new eSQL();
