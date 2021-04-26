const eSQL = require('../modules/eSQL');
const User = require('../modules/User');
const info = require('../modules/info');
const expAlg = require('../functions/Core/expAlg');

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
        .Query();
      eSQL
        .Insert('character_locations', ['discord_id', 'map'])
        .Values([payload.user, 'deep sea port'])
        .Query();
      eSQL
        .Insert('character_leveling', [
          'discord_id',
          'level',
          'current_exp',
          'needed_exp',
        ])
        .Values([payload.user, 1, 0, expAlg(1)])
        .Query();

      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
