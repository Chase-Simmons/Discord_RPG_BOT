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

// STATUS CODES
// 0 = NORMAL
// 1 = EMBED
// 2 = REPLY

function commandFilter(content) {
  switch (content.msg) {
    /*-----> TESTING <-----*/
    case 'test':
      return {
        reply: {
          title: 'Test',
          description: 'This is a test',
          fields: [{ name: 'test1', value: 'Test successfully completed!' }],
        },
        statusCode: 1,
      };
    /*-----> TESTING <-----*/

    /*-----> LOGIN/OUT <-----*/
    case 'login':
      return {
        reply: loginUser(content.user),
        statusCode: 2,
      };
    case 'logout':
      return {
        reply: logoutUser(content.user),
        statusCode: 2,
      };
    /*-----> LOGIN/OUT <-----*/

    case 'register':
      return {
        reply: register(content.user),
        statusCode: 2,
      };

    /*-----> HELP <-----*/
    case 'c':
    case 'command':
    case 'commands':
      return {
        reply: commandList,
        statusCode: 1,
      };
    /*-----> HELP <-----*/

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
