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

const queryObj = {};
let queryText = '';

let response;

function buildQuery(queryObj) {
  for (const [key, value] of Object.entries(queryObj)) {
    switch (key) {
      case 'create':
      case 'insert':
      case 'update':
      case 'delete':
        queryText += `${key.toUpperCase()} "${value}"`;
        break;

      case 'set':
        queryText += ` ${key.toUpperCase()} "${value.what}" = '${value.to}'`;
        break;

      case 'where':
        queryText += ` ${key.toUpperCase()} "${value.where}" = '${value.is}'`;
        break;
    }
  }

  queryText += ';';

  console.log(queryText);
  Pool(queryText);
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
class eSQL {
  Create(what = '') {
    queryObj.create = what;
    return this;
  }
  Insert(what = '') {
    queryObj.insert = what;
    return this;
  }
  Update(what = '') {
    queryObj.update = what;
    return this;
  }
  Delete(what = '') {
    queryObj.delete = what;
    return this;
  }
  Set(what = '', to = '') {
    queryObj.set = { what, to };
    return this;
  }
  Where(where = '', is = '') {
    queryObj.where = { where, is };
    return this;
  }
  Query() {
    buildQuery(queryObj);
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
