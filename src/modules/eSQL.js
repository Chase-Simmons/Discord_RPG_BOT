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

let queryText = '';

let response;

function startQuery() {
  queryText += ';';

  console.log(queryText);

  Pool(queryText);
  queryCleanup();
}

function SelectMapping(what) {
  // COMPLEX 'object' aka array MAPPING EXAMPLE =
  // eSQL.Select(
  //  [ array
  //    { tableName:
  //      [array of column names]
  //    },
  //    { tableName:
  //      [array of column names]
  //    }
  //  ]);

  if (what === '*') {
    queryText += `SELECT ${what}`;
  } else if (typeof what === 'object') {
    queryText += 'SELECT';
    what.forEach((object) => {
      for (const [table, value] of Object.entries(object)) {
        value.forEach((column) => {
          queryText += ` "${table}"."${column}",`;
        });
      }
    });
    queryText = queryText.slice(0, -1);
  } else {
    queryText += `SELECT "${what}"`;
  }
}

function queryCleanup() {
  queryText = '';
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
    queryText += `CREATE "${what}"`;
    return this;
  }
  Insert(what = '', values = []) {
    queryText += `INSERT INTO "${what}" ("${values.join(`", "`)}")`;
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
  Select(what = '' || [{ tableName: [] }]) {
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
  Values(values = []) {
    queryText += ` VALUES ('${values.join(`', '`)}')`;
    return this;
  }
  Join(what = '', onTable = '', onTableColumn = '', whatColumn = '') {
    queryText += ` JOIN "${what}" ON "${onTable}"."${onTableColumn}" = "${what}"."${whatColumn}"`;
    return this;
  }
  LeftJoin(what = '', onTable = '', onTableColumn = '', whatColumn = '') {
    queryText += ` LEFT JOIN "${what}" ON "${onTable}"."${onTableColumn}" = "${what}"."${whatColumn}"`;
    return this;
  }
  RightJoin(what = '', onTable = '', onTableColumn = '', whatColumn = '') {
    queryText += ` RIGHT JOIN "${what}" ON "${onTable}"."${onTableColumn}" = "${what}"."${whatColumn}"`;
    return this;
  }
  Group(by = '', byColumn = '') {
    queryText += ` GROUP BY "${by}"."${byColumn}"`;
    return this;
  }
  Order(by = '', byColumn = '', direction = '') {
    queryText += ` ORDER BY "${by}"."${byColumn}" ${direction.toUpperCase()}`;
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
