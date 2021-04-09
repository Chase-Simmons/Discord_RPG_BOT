// STATUS CODES
// 0 = NORMAL REPLY
// 1 = EMBED

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
