module.exports = (content) => {
  const user = content.user;
  const selectedClass = content.class;

  switch (selectedClass) {
    case 'warrior':
      user.stats = {
        strength: 7,
        dexterity: 1,
        vitality: 7,
        defence: 6,
        agility: 2,
        arcane: 2,
        piety: 3,
      };
      break;
    case 'cleric':
      user.stats = {
        strength: 3,
        dexterity: 1,
        vitality: 6,
        defence: 2,
        agility: 2,
        arcane: 5,
        piety: 9,
      };
      break;
    case 'rogue':
      user.stats = {
        strength: 6,
        dexterity: 3,
        vitality: 6,
        defence: 2,
        agility: 7,
        arcane: 3,
        piety: 1,
      };
      break;
    case 'mage':
      user.stats = {
        strength: 2,
        dexterity: 2,
        vitality: 4,
        defence: 4,
        agility: 3,
        arcane: 9,
        piety: 4,
      };
      break;
    case 'archer':
      user.stats = {
        strength: 2,
        dexterity: 7,
        vitality: 4,
        defence: 3,
        agility: 6,
        arcane: 2,
        piety: 4,
      };
      break;
    default:
      break;
  }
};
