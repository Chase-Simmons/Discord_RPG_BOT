function reduceMessage(msg) {
  let newMsg = '';

  for (let i = 4; i < msg.length; i++) {
    newMsg += msg[i];
  }
  return newMsg;
}

module.exports = (msg) => {
  return reduceMessage(msg);
};
