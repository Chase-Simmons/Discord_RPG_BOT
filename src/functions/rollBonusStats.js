const ranNum = Math.floor(Math.random() * 10000 + 1);

module.exports = () => {
  let bonus;
  if (ranNum <= 5000) {
    bonus = Math.floor(Math.random() * 4) + 1;
  } else if (ranNum <= 6000) {
    bonus = Math.floor(Math.random() * 4) + 2;
  } else if (ranNum <= 7000) {
    bonus = Math.floor(Math.random() * 4) + 3;
  } else if (ranNum <= 8000) {
    bonus = Math.floor(Math.random() * 5) + 4;
  } else if (ranNum <= 9000) {
    bonus = Math.floor(Math.random() * 5) + 5;
  } else if (ranNum <= 9999) {
    bonus = Math.floor(Math.random() * 5) + 6;
  } else if (ranNum === 10000) {
    bonus = 13;
  }

  return bonus;
};
