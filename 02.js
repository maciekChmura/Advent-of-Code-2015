// --- Day 2: I Was Told There Would Be No Math ---
// http://adventofcode.com/2015/day/2

var fs = require("fs");
var inputString = fs.readFileSync("02.txt", "utf8");
var inputArray = inputString.split("\r\n");
var total = 0;

for (var i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].split("x").map(function (element) {
        return parseInt(element)
    });
}

for (var j = 0; j < inputArray.length; j++) {
    var l = inputArray[j][0];
    var w = inputArray[j][1];
    var h = inputArray[j][2];
    var surfaceAreaArray = [];
    var sidesA = 2 * l * w;
    surfaceAreaArray.push(sidesA);
    var sidesB = 2 * w * h;
    surfaceAreaArray.push(sidesB);
    var sidesC = 2 * h * l;
    surfaceAreaArray.push(sidesC);
    var min = Math.min(surfaceAreaArray[0], surfaceAreaArray[1], surfaceAreaArray[2]) / 2;
    surfaceAreaArray.push(min);
    for (var k = 0; k < surfaceAreaArray.length; k++) {
        total += surfaceAreaArray[k];
    }
}

console.log(total);
