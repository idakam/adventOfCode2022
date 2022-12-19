const fs = require("fs");

let pairs = fs
  .readFileSync("input.txt")
  .toString()
  .trimEnd()
  .split("\n")
  .map((pair) => pair.split(","))
  .map((pair) => pair.map((elf) => elf.split("-")))
  .map((pair) => {
    let first = [];
    for (let i = parseInt(pair[0][0]); i <= parseInt(pair[0][1]); i++) {
      first.push(i);
    }

    let second = [];
    for (let i = parseInt(pair[1][0]); i <= parseInt(pair[1][1]); i++) {
      second.push(i);
    }

    return (pair = [[...first], [...second]]);
  });

let sum = 0;
let partTwo = 0;
pairs.forEach((pair) => {
  let longest = [];
  let shortest = [];
  if (pair[0].length > pair[1].length || pair[0].length == pair[1].length) {
    longest = pair[0];
    shortest = pair[1];
  } else {
    longest = pair[1];
    shortest = pair[0];
  }

  let common = [];

  for (let i = 0; i < longest.length; i++) {
    for (let j = 0; j < shortest.length; j++) {
      if (longest[i] === shortest[j]) {
        common.push(shortest[j]);
      }
    }
  }

  let same = true;
  for (let i = 0; i < shortest.length; i++) {
    if (shortest[i] !== common[i]) {
      same = false;
    }
  }

  for (let j = 0; j < shortest.length; j++) {
    if (longest.includes(shortest[j])) {
      partTwo++;
      break;
    }
  }

  if (same === true && shortest.length > 0) {
    sum++;
  }
});

console.log("part one:", sum);

console.log("part two:", partTwo);
