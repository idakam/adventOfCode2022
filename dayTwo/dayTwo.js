let fs = require("fs");
let score = 0;
let answers = fs.readFileSync("input.txt").toString();
answers = answers.substring(0, answers.length - 1).split("\n");
answers = answers.map((answer) => answer.split(" "));

//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck
//A for Rock, B for Paper, and C for Scissors.

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
// X for Rock, Y for Paper, and Z for Scissors
// (1 for Rock, 2 for Paper, and 3 for Scissors)
// A Y
// B X
// C Z
// This strategy guide predicts and recommends the following:

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).
