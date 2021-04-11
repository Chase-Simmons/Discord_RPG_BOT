const loginCheck = require('./loginCheck');
const userInfo = require('./getUserInfo');

function selectClass(content) {
  if (content.user.character.class === null) {
    content.user.character.class = content.value;
    console.log(content.user);
    return `has selected the class of **${content.value}**.`;
  } else {
    return `you have already selected the class of **${content.user.character.class}**.`;
  }
}

function selectSwitch(content) {
  const user = content.user;
  const arg = content.args[0];
  const value = content.args[1];

  let rep = { content: 'error during selection process', statusCode: 1 };

  switch (arg) {
    case 'class':
      const Class = selectClass({ user, value });
      rep = { content: Class, statusCode: 1 };
      break;
  }

  console.log(content);

  return rep;
}

module.exports = (content) => {
  if (loginCheck(content.user)) {
    content.user = userInfo(content.user);

    return selectSwitch(content);
  } else {
    return {
      content: 'you are not logged in. Please **login** first.',
      statusCode: 1,
    };
  }
};
