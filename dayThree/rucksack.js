let fs = require("fs");
let sum = 0;
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let rucksacks = fs.readFileSync("input.txt").toString().trimEnd().split("\n");

let sectionedRucksacks = rucksacks.map((rucksack) => {
  let midpoint = rucksack.length / 2;
  let comp1 = rucksack.slice(0, midpoint);
  let comp2 = rucksack.slice(midpoint, rucksack.length);
  return [comp1, comp2];
});

let mistakes = [];

sectionedRucksacks.forEach((rucksack) => {
  let current = [];
  for (let i = 0; i < rucksack[0].length; i++) {
    if (rucksack[1].includes(rucksack[0][i])) {
      if (current.indexOf(rucksack[0][i]) === -1) {
        current.push(rucksack[0][i]);
      }
    }
  }
  mistakes.push(...current);
});

for (let i = 0; i < mistakes.length; i++) {
  sum += alpha.indexOf(mistakes[i]) + 1;
}

console.log("part one:", sum);

let groups = [];

let ruckCopy = rucksacks.slice();
while (ruckCopy.length) {
  groups.push(ruckCopy.splice(0, 3));
}

let sumTwo = 0;

groups.forEach((group) => {
  let common = [];
  for (let i = 0; i < group[0].length; i++) {
    for (let j = 0; j < group[1].length; j++) {
      for (let k = 0; k < group[2].length; k++) {
        if (
          group[0][i] === group[1][j] &&
          group[1][j] === group[2][k] &&
          common.indexOf(group[0][i]) === -1
        ) {
          common.push(group[0][i]);

          sumTwo += alpha.indexOf(group[0][i]) + 1;
        }
      }
    }
  }
});

console.log("sumTwo: ", sumTwo);
