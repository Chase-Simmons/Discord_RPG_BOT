module.exports = (msg) => {
  const commandArray = [];
  const args = [];
  let command;

  if (msg.split(' ').length > 1) {
    commandArray.push(...msg.split(' '));
    command = commandArray[0];
    commandArray.shift();
    args.push(...commandArray);
  } else {
    command = msg;
  }

  return [command, args];
};
