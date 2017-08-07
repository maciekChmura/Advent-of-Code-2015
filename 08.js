// --- Day 8: Matchsticks ---
// http://adventofcode.com/2015/day/8

var fs = require('fs');
var rawData = fs.readFileSync('08.txt').toString();

var codeCounter = 0;
var memoryCounter = 0;

// code character sum
for (var i = 0; i < rawData.length; i++) {
    if (rawData.charAt(i) !== '\n') {
        codeCounter++;
    }
}

// memory character sum
for (var j = 0; j < rawData.length; j++) {
    if (rawData.charAt(j) === '\\' && rawData.charAt(j + 1) === '\\') {
        memoryCounter++;
        j += 1;
    } else if (rawData.charAt(j) === '\\' && rawData.charAt(j + 1) === '\"') {
        memoryCounter++;
        j += 1;
    } else if (rawData.charAt(j) === '\\' && rawData.charAt(j + 1) === 'x') {
        memoryCounter++;
        j += 3;
    } else if (rawData.charAt(j) === '\"' && rawData.charAt(j + 1) === '\n') {
        //memoryCounter++;
        j += 1;
    } else if (rawData.charAt(j) === '\"' && rawData.charAt(j + 1) === '\"') {
        //
    } else if (rawData.charAt(j) === '\"' && rawData.charAt(j + 1) !== '\"') {
        //
    } else {
        memoryCounter++;
    }
}

console.log(codeCounter - memoryCounter);
