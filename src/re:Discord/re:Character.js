const eSQL = require('../modules/eSQL');
const User = require('../modules/User');
const info = require('../modules/info');
const expAlg = require('../functions/Core/expAlg');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;
  const values = payload.character;

  const user = User.GetInfo(payload.user);

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
        .Then(() => {
          user.class = values.class;
          user.maxHP = values.maxHP;
          user.currentHP = values.currentHP;
          user.maxMana = values.maxMana;
          user.currentMana = values.currentMana;
          user.strength = values.strength;
          user.dexterity = values.dexterity;
          user.vitality = values.vitality;
          user.defence = values.defence;
          user.agility = values.agility;
          user.arcane = values.arcane;
          user.piety = values.piety;
        });
      eSQL
        .Insert('character_locations', ['discord_id', 'map'])
        .Values([payload.user, 'deep sea port'])
        .Query()
        .Then(() => {
          user.map = 'deep sea port';
        });
      eSQL
        .Insert('character_leveling', [
          'discord_id',
          'level',
          'current_exp',
          'needed_exp',
        ])
        .Values([payload.user, 1, 0, expAlg(1)])
        .Query()
        .Then(() => {
          user.level = 1;
          user.current_exp = 0;
          user.needed_exp = expAlg(1);
        });

      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
