const fs = require("fs");

let datastream = fs.readFileSync("input.txt").toString().trimEnd();

function findMarker(charNum) {
  for (let i = 0; i < datastream.length; i++) {
    let slice = datastream.slice(i, i + charNum);
    console.log(slice, i);
    for (let j = 0; j < slice.length; j++) {
      if (
        //check that the value doesnt exist in slice
        slice.indexOf(slice[j]) == j &&
        slice.indexOf(slice[j], j + 1) == -1
      ) {
        //if we are at the end of the slice that means it was the first time we havent had a repeat in that slice
        //return that index
        if (j === slice.length - 1) {
          return i + charNum;
          //otherwise we arent at the end so keep going
        } else {
          continue;
        }
        //if value does exist then break outta of the loop in order to examine a new slice
      } else {
        break;
      }
    }
  }
}

console.log("part one:", findMarker(4));
console.log("part one:", findMarker(14));
