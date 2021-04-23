const User = require('../modules/User');
const dispatch = require('../re:Discord/.root.js');

function move(content) {
  const user = content.user;
  const arg = content.args.join(' ');

  let rep = { content: `has successfully moved to **${arg}**.`, statusCode: 1 };

  if (User.Move(user.id, arg) === true) {
    dispatch({
      action: 'MOVE',
      call: 'PUT',
      payload: { user: user.discord_id, location: arg },
    });
  } else {
    rep = { content: `could not move to **${arg}**.`, statusCode: 1 };
  }

  return rep;
}

module.exports = (content) => {
  return move(content);
};
