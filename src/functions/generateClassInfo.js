const dispatch = require('../re:Discord/.root.js');

module.exports = (content) => {
  const user = content.user;
  const selectedClass = content.class;

  function calcMaxHP(vit) {
    return Math.floor(1 + vit + ((vit * (vit / 2)) ^ 2.17));
  }

  function calcMaxMana(arc, pie) {
    return (
      Math.floor((1 + arc + ((arc * (arc / 2)) ^ 2.17)) * 0.43) +
      Math.floor((1 + pie + ((pie * (pie / 2)) ^ 2.17)) * 0.93)
    );
  }

  switch (selectedClass) {
    case 'warrior':
      dispatch({
        action: 'CHARACTER',
        call: 'POST',
        payload: {
          user: user.discord_id,
          character: {
            class: selectedClass,
            maxHP: calcMaxHP(7),
            currentHP: calcMaxHP(7),
            maxMana: calcMaxMana(2, 3),
            currentMana: calcMaxMana(2, 3),
            strength: 7,
            dexterity: 1,
            vitality: 7,
            defence: 6,
            agility: 2,
            arcane: 2,
            piety: 3,
          },
        },
      });
      break;
    case 'cleric':
      dispatch({
        action: 'CHARACTER',
        call: 'POST',
        payload: {
          user: user.discord_id,
          character: {
            class: selectedClass,
            maxHP: calcMaxHP(6),
            currentHP: calcMaxHP(6),
            maxMana: calcMaxMana(5, 9),
            currentMana: calcMaxMana(5, 9),
            strength: 3,
            dexterity: 1,
            vitality: 6,
            defence: 2,
            agility: 2,
            arcane: 5,
            piety: 9,
          },
        },
      });
      break;
    case 'rogue':
      dispatch({
        action: 'CHARACTER',
        call: 'POST',
        payload: {
          user: user.discord_id,
          character: {
            class: selectedClass,
            maxHP: calcMaxHP(6),
            currentHP: calcMaxHP(6),
            maxMana: calcMaxMana(3, 1),
            currentMana: calcMaxMana(3, 1),
            strength: 6,
            dexterity: 3,
            vitality: 6,
            defence: 2,
            agility: 7,
            arcane: 3,
            piety: 1,
          },
        },
      });
      break;
    case 'mage':
      dispatch({
        action: 'CHARACTER',
        call: 'POST',
        payload: {
          user: user.discord_id,
          character: {
            class: selectedClass,
            maxHP: calcMaxHP(4),
            currentHP: calcMaxHP(4),
            maxMana: calcMaxMana(9, 4),
            currentMana: calcMaxMana(9, 4),
            strength: 2,
            dexterity: 2,
            vitality: 4,
            defence: 4,
            agility: 3,
            arcane: 9,
            piety: 4,
          },
        },
      });
      break;
    case 'archer':
      dispatch({
        action: 'CHARACTER',
        call: 'POST',
        payload: {
          user: user.discord_id,
          character: {
            class: selectedClass,
            maxHP: calcMaxHP(4),
            currentHP: calcMaxHP(4),
            maxMana: calcMaxMana(2, 4),
            currentMana: calcMaxMana(2, 4),
            strength: 2,
            dexterity: 7,
            vitality: 4,
            defence: 3,
            agility: 6,
            arcane: 2,
            piety: 4,
          },
        },
      });
      break;
    default:
      break;
  }
};
