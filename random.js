function random() {
  let result = (Math.floor(Math.random() * 8) + 1).toString();
  return result;
}

module.exports = { random };
