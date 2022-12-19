let fs = require("fs");

let [stacks, moves] = fs
  .readFileSync("input.txt")
  .toString()
  .trimEnd()
  .split("\n\n");
// .map((elf) => elf.split("\n"));
let lines = stacks
  .split("\n")
  .map((line) => line.split("").filter((value, index) => index % 4 === 1));
let stackNumber = lines.pop();

let numberedStacks = {};

for (let i = 0; i < stackNumber.length; i++) {
  for (let j = 0; j < lines.length; j++) {
    if (!numberedStacks[stackNumber[i]]) numberedStacks[stackNumber[i]] = [];

    if (lines[j][i] !== " ") numberedStacks[stackNumber[i]].push(lines[j][i]);
  }
}

let instructions = moves.split("\n");

//first number is how many to take from beginning of array
//second number is where to take it from
//third number is where to put them

let instructionsNums = instructions
  .map((line) => line.split(" "))
  .map((line) => {
    return line
      .map((value) => parseInt(value))
      .filter((value) => {
        if (typeof value === "number") {
          return value;
        }
      });
  });

function moveStacks(listOfInstructions) {
  let partOneStacks = JSON.parse(JSON.stringify(numberedStacks));
  let partTwoStacks = JSON.parse(JSON.stringify(numberedStacks));

  listOfInstructions.forEach((line) => {
    let numberOfBoxes = line[0];
    let sourceStack = line[1];
    let destination = line[2];
    let boxes;

    //partOne:
    boxes = partOneStacks[sourceStack].splice(0, numberOfBoxes);

    while (boxes.length) {
      let current = boxes.shift();
      partOneStacks[destination].unshift(current);
    }

    //partTwo:
    boxes = partTwoStacks[sourceStack].splice(0, numberOfBoxes);
    partTwoStacks[destination].unshift(...boxes);
  });
  return getMessage(partOneStacks, partTwoStacks);
}

function getMessage(partOneStacks, partTwoStacks) {
  let messageOne = "";
  let messageTwo = "";
  for (let stack in partOneStacks) {
    messageOne += partOneStacks[stack][0];
    messageTwo += partTwoStacks[stack][0];
  }
  return console.log(
    "part one message:",
    messageOne,
    "part two message:",
    messageTwo
  );
}

moveStacks(instructionsNums);
