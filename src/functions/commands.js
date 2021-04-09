const loginUser = require('./loginUser');

// STATUS CODES
// 0 = NORMAL
// 1 = EMBED
// 2 = REPLY

function commandFilter(content) {
  switch (content.msg) {
    case 'test':
      return {
        reply: {
          title: 'Test',
          description: 'This is a test',
          fields: [{ name: 'test1', value: 'Test successfully completed!' }],
        },
        statusCode: 1,
      };
    case 'login':
      if (loginUser(content.user) === true) {
        return {
          reply: `has successfully logged in.`,
          statusCode: 2,
        };
      } else {
        return {
          reply: `there was an error trying to log you in. Please try again.`,
          statusCode: 2,
        };
      }
    case 'logout':
      return {
        reply: `has successfully logged out.`,
        statusCode: 2,
      };
    default:
      return {
        reply: 'This did not match any commands.',
        statusCode: 0,
      };
  }
}

module.exports = (content) => {
  return commandFilter(content);
};
