let fs = require("fs");

let elves = fs
  .readFileSync("input.txt")
  .toString()
  .trimEnd()
  .split("\n\n")
  .map((elf) => elf.split("\n"));

let newElves = elves.map((elf) =>
  elf.reduce((accum, curr) => parseInt(accum) + parseInt(curr), 0)
);

console.log("oart 1", Math.max(...newElves));

newElves = newElves.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += newElves[i];
}
console.log("part 2", sum);
