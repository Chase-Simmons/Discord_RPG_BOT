const eSQL = require('../modules/eSQL');
const User = require('../modules/User');
const info = require('../modules/info');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;
  const values = payload.character;

  switch (call) {
    case 'GET':
      break;
    case 'POST':
      eSQL
        .Insert('character', [
          'discord_id',
          'class',
          'maxHP',
          'currentHP',
          'maxMana',
          'currentMana',
          'strength',
          'dexterity',
          'vitality',
          'defence',
          'agility',
          'arcane',
          'piety',
        ])
        .Values([
          payload.user,
          values.class,
          values.maxHP,
          values.currentHP,
          values.maxMana,
          values.currentMana,
          values.strength,
          values.dexterity,
          values.vitality,
          values.defence,
          values.agility,
          values.arcane,
          values.piety,
        ])
        .Query()
        .Then((res) => {
          let user = User.GetInfo(payload.user);
          user = { ...user, ...values };
          console.table(user);
        });

      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
