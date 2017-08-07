// --- Day 3: Perfectly Spherical Houses in a Vacuum ---
// http://adventofcode.com/2015/day/3

var fs = require("fs");
var inputString = fs.readFileSync("03.txt", "utf8");
var inputArray = inputString.split("");

var x = 0;
var y = 0;
var cord = "0x0";
var housesCordinates = new Set();

addCord();

for (var i = 0; i < inputArray.length; i++) {
    switch (inputArray[i]) {
        case "^":
            y++;
            break;
        case ">":
            x++;
            break;
        case "v":
            y--;
            break;
        case "<":
            x--;
            break;
        default:

    }
    addCord();
}
var zomba = 3;
function addCord() {
    cord = x + "x" + y;
    housesCordinates.add(cord);
}

console.log(housesCordinates);
console.log(housesCordinates.size);
