const { read } = require("./read");
const arrOfSudoku = read();
const sudOne = arrOfSudoku.slice(0, 1).join("").split("");

function solve(arrOfSudoku) {
  const arr = [];
  for (let i = 0; i < sudOne.length; i += 9) {
    arr.push(sudOne.slice(i, i + 9));
  }
  const table = arr.map((el) =>
    el.map((el) => (el === "-" ? (el = random()) : el))
  );
  return table;
}

console.table(solve(arrOfSudoku));

function random() {
  let result = (Math.floor(Math.random() * 8) + 1).toString();
  return result;
}

module.exports = { solve };
