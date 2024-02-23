const fs = require("fs");

function read() {
  const data = fs.readFileSync("puzzles.txt", "utf-8").split("\n");
  return data;
}

module.exports = { read };