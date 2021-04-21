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

// STATUS CODES
// 0 = NORMAL
// 1 = REPLY
// 2 = EMBED NO THUMBNAIL
// 3 = EMBED W/ THUMBNAIL

function commandFilter(content) {
  const user = content.user;
  const msg = content.msg;
  const commandArray = [];
  const args = [];

  let command;

  if (msg.split(' ').length > 1) {
    commandArray.push(...msg.split(' '));
    command = commandArray[0];
    commandArray.shift();
    args.push(...commandArray);
  } else {
    command = msg;
  }

  switch (command) {
    /*-----> TESTING <-----*/
    case 'test':
      return {
        reply: {
          title: 'Test',
          description: 'This is a test',
          fields: [{ name: 'test1', value: 'Test successfully completed!' }],
        },
        statusCode: 3,
      };
    /*-----> TESTING <-----*/

    /*-----> LOGIN/OUT <-----*/
    case 'login':
      return {
        reply: loginUser(user),
        statusCode: 1,
      };
    case 'logout':
      return {
        reply: logoutUser(user),
        statusCode: 1,
      };
    /*-----> LOGIN/OUT <-----*/

    /*-----> REGISTRATION <-----*/
    case 'register':
      const Register = register(user);
      return {
        reply: Register.content,
        statusCode: Register.statusCode,
      };
    /*-----> REGISTRATION <-----*/

    /*-----> HELP <-----*/
    case 'c':
    case 'command':
    case 'commands':
      return {
        reply: commandList,
        statusCode: 2,
      };
    /*-----> HELP <-----*/

    /*-----> SELECT <-----*/
    case 'select':
      const Select = select({ user, args });
      return { reply: Select.content, statusCode: Select.statusCode };
    /*-----> SELECT <-----*/

    case 'move':
      const Move = move({ user, args });
      return { reply: Move.content, statusCode: Move.statusCode };
    /*-----> NO MATCH <-----*/
    default:
      return {
        reply: 'This did not match any commands.',
        statusCode: 0,
      };
    /*-----> NO MATCH <-----*/
  }
}

module.exports = (content) => {
  return commandFilter(content);
};
