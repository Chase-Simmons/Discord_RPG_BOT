module.exports = (level) => {
  const mod = level + 4;
  const output = Math.floor(1 + mod + (mod * (mod / 2)) ** 2.83);

  return output;
};
