const selectClass = require('./select/class');

const error = { reply: 'error during selection process', statusCode: 1 };

function prepareSelect(content) {
  const [user, arg, value] = [content.user, content.args[0], content.args[1]];
  if (arg === undefined) return error;

  const handle = SelectHandler[arg];
  return handle({ user, value });
}

class SelectHandler {
  static class({ user, value }) {
    return selectClass({ user, value });
  }
}
module.exports = (content) => {
  return prepareSelect(content);
};
