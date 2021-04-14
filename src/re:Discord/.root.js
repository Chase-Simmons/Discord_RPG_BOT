const login = require('./logout.saga');
const logout = require('./logout.saga');
const user = require('./user.saga');

function dispatch(dataObj) {
  // console.log('incoming request', dataObj);
  const action = dataObj.action;
  const data = { call: dataObj.call, payload: dataObj.payload };

  let response;

  switch (action) {
    case 'LOGIN':
      login(data);
      break;
    case 'LOGOUT':
      logout(data);
      break;
    case 'USER':
      user(data);
      break;
  }

  if (!response) return;
  return response;
}

module.exports = (dataObj) => {
  dispatch(dataObj);
};
