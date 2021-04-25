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
  const user = User.GetInfo(content.user.id);
  const msg = content.msg;
  const [command, args] = [...splitMsg(msg)];
  const handle = CommandHandler[command];

  if (handle === undefined) return noCommandMatch;

  return handle({ user, args });
}

class CommandHandler {
  static test() {
    return {
      reply: {
        title: 'Test',
        description: 'This is a test',
        fields: [{ name: 'test1', value: 'Test successfully completed!' }],
      },
      statusCode: 3,
    };
  }
  static login({ user }) {
    return {
      reply: loginUser(user),
      statusCode: 1,
    };
  }
  static logout({ user }) {
    return {
      reply: logoutUser(user),
      statusCode: 1,
    };
  }
  static commands() {
    return {
      reply: commandList,
      statusCode: 2,
    };
  }
  static register({ user }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    const Register = register(user);
    return {
      reply: Register.content,
      statusCode: Register.statusCode,
    };
  }
  static select({ user, args }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    const Select = select({ user, args });
    return { reply: Select.content, statusCode: Select.statusCode };
  }

  static move({ user, args }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    const Move = move({ user, args });
    return { reply: Move.content, statusCode: Move.statusCode };
  }

  static city({ user }) {
    if (isLoggedIn(user) === false) return notLoggedInMessage;
    const City = city(user);
    return { reply: City.content, statusCode: 2 };
  }
}

module.exports = (content) => {
  return prepareCommand(content);
};
