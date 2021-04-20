const login = require('./re:Login');
const logout = require('./re:Logout');
const user = require('./re:User');
const register = require('./re:Register');
const character = require('./re:Character');

function dispatch(dataObj) {
  // console.log('incoming request', dataObj);
  const action = dataObj.action;
  const data = { call: dataObj.call, payload: dataObj.payload };

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
    case 'REGISTER':
      register(data);
      break;
    case 'CHARACTER':
      character(data);
      break;
  }

  return;
}

module.exports = (dataObj) => {
  dispatch(dataObj);
};
