//FUNCTIONS

/*-----> LOGIN/OUT <-----*/
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
/*-----> LOGIN/OUT <-----*/

/*-----> REGISTRATION <-----*/
const register = require('./register');
/*-----> REGISTRATION <-----*/

/*-----> HELP <-----*/
const commandList = require('./commandList');
/*-----> HELP <-----*/

/*-----> SELECT <-----*/
const select = require('./select');
/*-----> SELECT <-----*/

const move = require('./move');
const city = require('./city');
const test = require('./test');

const User = require('../modules/User');
const splitMsg = require('./QoCL/splitMsg');

// STATUS CODES
// 0 = NORMAL
// 1 = REPLY
// 2 = EMBED NO THUMBNAIL
// 3 = EMBED W/ THUMBNAIL

function isLoggedIn(user) {
  if (user.online_status === 'online') {
    return true;
  } else {
    return false;
  }
}

const notLoggedInMessage = {
  reply: 'you are not logged in. Please **login** first.',
  statusCode: 1,
};

const noCommandMatch = {
  reply: 'This did not match any commands.',
  statusCode: 0,
};

function prepareCommand(content) {
  const [user, msg] = [User.GetInfo(content.user.id), content.msg];
  const [command, args] = [...splitMsg(msg)];
  const handle = CommandHandler[command];

  if (handle === undefined) return noCommandMatch;

  return handle({ user, args });
}

class CommandHandler {
  static test() {
    return test;
  }
  static login({ user }) {
    return loginUser(user);
  }
  static logout({ user }) {
    return logoutUser(user);
  }
  static commands() {
    return commandList;
  }
  static register({ user }) {
    return register(user);
  }
  static select({ user, args }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    return select({ user, args });
  }

  static move({ user, args }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    return move({ user, args });
  }

  static city({ user }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    return city(user);
  }
}

module.exports = (content) => {
  return prepareCommand(content);
};
