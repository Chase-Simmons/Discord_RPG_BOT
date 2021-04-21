const eSQL = require('../modules/eSQL');
const info = require('../modules/info');

module.exports = (data) => {
  const call = data.call;
  const payload = data.payload;

  switch (call) {
    case 'GET':
      break;
    case 'GET_ALL':
      eSQL
        .Select([
          { users: ['discord_id', 'username', 'online_status'] },
          { character_locations: ['map'] },
          {
            character: [
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
            ],
          },
        ])
        .From('users')
        .LeftJoin('character_locations', 'users', 'discord_id', 'discord_id')
        .LeftJoin('character', 'users', 'discord_id', 'discord_id')
        .Query()
        .Then((response) => {
          console.table(response.rows);
          info.allUsers = [...response.rows];
        });
      break;
    case 'POST':
      break;
    case 'DELETE':
      break;
    case 'PUT':
      break;
  }
};
