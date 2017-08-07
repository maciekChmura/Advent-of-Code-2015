// --- Day 2: I Was Told There Would Be No Math ---
//     --- Part Two ---
// http://adventofcode.com/2015/day/2

var fs = require("fs");
var string = fs.readFileSync("02.txt", "utf8");
var arr = string.split("\r\n");
var total = 0;

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("x").map(function(element) {
        return parseInt(element)
    });
}

for (var k = 0; k < arr.length; k++) {
    for (i = 0; i < 2; i++) {
        for (j = i + 1; j < 3; ++j) {
            if (arr[k][i] > arr[k][j]) {
                var swap = arr[k][i];
                arr[k][i] = arr[k][j];
                arr[k][j] = swap;
            }
        }
    }
}

for (var j = 0; j < arr.length; j++) {
    var wrap = 2 * arr[j][0] + 2 * arr[j][1];
    var ribbon = arr[j][0] * arr[j][1] * arr[j][2];
    total += wrap + ribbon;
}

console.log(total);
