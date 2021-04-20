const loginCheck = require('./loginCheck');
const User = require('../modules/User');
const setUserStats = require('./setUserStats');

function selectClass(content) {
  let valueCheck = false;

  if (
    content.value === 'warrior' ||
    content.value === 'cleric' ||
    content.value === 'rogue' ||
    content.value === 'mage' ||
    content.value === 'archer'
  ) {
    valueCheck = true;
  }

  if (content.user.character.class === null && valueCheck === true) {
    content.user.character.class = content.value;
    setUserStats({ user: content.user, class: content.value });
    console.log(content.user);

    return `has selected the class of **${content.value}**.`;
  } else if (valueCheck === false) {
    return `**${content.value}** does not match any of the available classes. Try using **classes** to see your options.`;
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

  return rep;
}

module.exports = (content) => {
  console.log(content);
  if (loginCheck(content.user) === true) {
    content.user = User.GetInfo(content.user.id);
    return selectSwitch(content);
  } else {
    return {
      content: 'you are not logged in. Please **login** first.',
      statusCode: 1,
    };
  }
};
