const mobs = require('../../Core/Mobs/.mobs');

function getLocalMobs(incomingUser) {
  const localMobs = [];

  for (const [mobName, mobInfo] of Object.entries(mobs)) {
    if (incomingUser.map === mobInfo.map) {
      localMobs.push({ [mobName]: mobInfo });
    }
  }
  console.log(localMobs);
  return localMobs;
}

module.exports = getLocalMobs;
