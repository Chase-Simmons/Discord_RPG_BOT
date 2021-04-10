//FUNCTIONS

/*-----> LOGIN/OUT <-----*/
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
/*-----> LOGIN/OUT <-----*/

/*-----> REGISTRATION <-----*/
const register = require('./register');
const create = require('./create');
/*-----> REGISTRATION <-----*/

/*-----> HELP <-----*/
const commandList = require('./commandList');
/*-----> HELP <-----*/

// STATUS CODES
// 0 = NORMAL
// 1 = REPLY
// 2 = EMBED NO THUMBNAIL
// 3 = EMBED W/ THUMBNAIL

function commandFilter(content) {
  const commandArray = [];
  let command;

  if (content.msg.split(' ').length > 0) {
    commandArray.push(...content.msg.split(' '));
    command = commandArray[0];
  } else {
    command = content.msg;
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
        reply: loginUser(content.user),
        statusCode: 1,
      };
    case 'logout':
      return {
        reply: logoutUser(content.user),
        statusCode: 1,
      };
    /*-----> LOGIN/OUT <-----*/

    /*-----> REGISTRATION <-----*/
    case 'register':
      const registrationReply = register(content.user);
      return {
        reply: registrationReply.content,
        statusCode: registrationReply.statusCode,
      };
    case 'create':
      return create(content.user);
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
