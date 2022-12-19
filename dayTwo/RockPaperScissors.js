let fs = require("fs");
let score = 0;
let answers = fs
  .readFileSync("input.txt")
  .toString()
  .trimEnd()
  .split("\n")
  .map((answer) => answer.split(" "));

answers.forEach((answer) => {
  switch (answer[1]) {
    case "X":
      score += 1;
      if (answer[0] === "A") score += 3;
      if (answer[0] === "B") score += 0;
      if (answer[0] === "C") score += 6;
      break;
    case "Y":
      score += 2;
      if (answer[0] === "A") score += 6;
      if (answer[0] === "B") score += 3;
      if (answer[0] === "C") score += 0;
      break;
    case "Z":
      score += 3;
      if (answer[0] === "A") score += 0;
      if (answer[0] === "B") score += 6;
      if (answer[0] === "C") score += 3;
      break;
    default:
      score += 0;
      break;
  }
});

console.log("Part 1: ", score);

let twoScore = 0;
answers.forEach((answer) => {
  switch (answer[1]) {
    case "X":
      if (answer[0] === "A") twoScore += 3;
      if (answer[0] === "B") twoScore += 1;
      if (answer[0] === "C") twoScore += 2;
      break;
    case "Y":
      twoScore += 3;
      if (answer[0] === "A") twoScore += 1;
      if (answer[0] === "B") twoScore += 2;
      if (answer[0] === "C") twoScore += 3;
      break;
    case "Z":
      twoScore += 6;
      if (answer[0] === "A") twoScore += 2;
      if (answer[0] === "B") twoScore += 3;
      if (answer[0] === "C") twoScore += 1;
      break;
    default:
      score += 0;
      break;
  }
});

console.log("Part 2: ", twoScore);
