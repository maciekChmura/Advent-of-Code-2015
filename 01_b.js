// --- Day 1: Not Quite Lisp ---
//     --- Part Two ---
// http://adventofcode.com/2015/day/1

var fs = require('fs');
var inputString = fs.readFileSync('01.txt', 'utf8');
var inputArray = inputString.split('');

var verticalPosition = 0;
for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === "(") {
        verticalPosition++;
        if (verticalPosition === -1) {
            break;
        }
    }
    else {
        verticalPosition--;
        if (verticalPosition === -1) {
            console.log(i + 1);
            break;
        }
    }
}
