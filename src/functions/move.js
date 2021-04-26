const User = require('../modules/User');
const dispatch = require('../re:Discord/.root.js');

function move({ user, args }) {
  const arg = args.join(' ');
  let reply = `has successfully moved to **${arg}**.`;
  let statusCode = 1;

  if (User.Move(user.id, arg) === true) {
    dispatch({
      action: 'MOVE',
      call: 'PUT',
      payload: { user: user.discord_id, location: arg },
    });
  } else {
    reply = `could not move to **${arg}**.`;

    return { reply, statusCode };
  }
}

module.exports = (content) => {
  return move(content);
};
