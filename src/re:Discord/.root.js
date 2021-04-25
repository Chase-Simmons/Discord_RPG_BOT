const login = require('./re:Login');
const logout = require('./re:Logout');
const user = require('./re:User');
const register = require('./re:Register');
const character = require('./re:Character');
const move = require('./re:Move');

function dispatch(dataObj) {
  // console.log('incoming request', dataObj);
  const action = dataObj.action;
  const data = { call: dataObj.call, payload: dataObj.payload };

  const handle = Route[action];

  if (handle === undefined) return;

  handle(data);

  return;
}

class Route {
  static LOGIN(data) {
    login(data);
  }
  static LOGOUT(data) {
    logout(data);
  }
  static USER(data) {
    user(data);
  }
  static REGISTER(data) {
    register(data);
  }
  static CHARACTER(data) {
    character(data);
  }
  static MOVE(data) {
    move(data);
  }
}

module.exports = (dataObj) => {
  dispatch(dataObj);
};
