const generateClassInfo = require('../generateClassInfo');

function selectClass({ user, value }) {
  let valueCheck = false;
  let reply;
  let statusCode = 1;

  if (
    value === 'warrior' ||
    value === 'cleric' ||
    value === 'rogue' ||
    value === 'mage' ||
    value === 'archer'
  ) {
    valueCheck = true;
  }

  if (user.class === null && valueCheck === true) {
    generateClassInfo({ user, class: value });
    reply = `has selected the class of **${value}**.`;
  } else if (valueCheck === false) {
    reply = `**${value}** does not match any of the available classes. Try using **classes** to see your options.`;
  } else {
    reply = `you have already selected the class of **${user.class}**.`;
  }

  return { reply, statusCode };
}
module.exports = (content) => {
  return selectClass(content);
};
