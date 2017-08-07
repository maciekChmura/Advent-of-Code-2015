// --- Day 6: Probably a Fire Hazard ---
// http://adventofcode.com/2015/day/6

var fs = require("fs");
var string = fs.readFileSync("06.txt", "utf8");
var arr = string.split("\n");
var arr2 = [];
var zeroGrid = [];
var inputGrid = [];
var xStart = 0;
var xEnd = 0;
var yStart = 0;
var yEnd = 0;
var total = 0;
//split array
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(" ");
    arr2.push(arr[i]);
}
var arr = arr2;
var arr2 = [];

//format array
for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === "turn") {
        arr[i][0] = arr[i][0] + arr[i][1];
        arr[i].splice(1, 1);
    }
}

//generate array size of 1000x1000 filled with 0
for (var i = 0; i <= 999; i++) {
    zeroGrid.push([]);
    for (var j = 0; j <= 999; j++) {
        zeroGrid[i][j] = 0;
    }
}

for (var a = 0; a < arr.length; a++) {          //read data
    xStart = Number((arr[a][1].split(',')[0]));
    xEnd = Number((arr[a][3].split(',')[0]));
    yStart = Number((arr[a][1].split(',')[1]));
    yEnd = Number((arr[a][3].split(',')[1]));
    console.log(xStart, xEnd, yStart, yEnd);
    inputGrid = [];
    for (var i = 0; i < 1000; i++) {
        inputGrid.push([]);
        for (var j = 0; j < 1000; j++) {
            if (j >= xStart && j <= xEnd && i >= yStart && i <= yEnd) {
                inputGrid[i][j] = 1;
            } else {
                inputGrid[i][j] = 0;
            }
        }
    }
    for (var k = 0; k < zeroGrid.length; k++) {
        for (var l = 0; l < zeroGrid[k].length; l++) {
            if (arr[a][0] === "turnoff") {
                if (inputGrid[k][l] === 1) {
                    zeroGrid[k][l] = 0;
                }
            } else if (arr[a][0] === "turnon") {
                if (inputGrid[k][l] === 1) {
                    zeroGrid[k][l] = 1;
                }
            } else if (arr[a][0] === "toggle") {
                if (inputGrid[k][l] === 1 && zeroGrid[k][l] === 0) {
                    zeroGrid[k][l] = 1;
                } else if (inputGrid[k][l] === 1 && zeroGrid[k][l] === 1) {
                    zeroGrid[k][l] = 0;
                } else {
                    zeroGrid[k][l] = zeroGrid[k][l];
                }
            }
        }
    }
    console.log(a);
}

for (var i = 0; i < zeroGrid.length; i++) {
    for (var j = 0; j < zeroGrid[i].length; j++) {
        if (zeroGrid[i][j] > 0) {
            total = total + zeroGrid[i][j];
        }
    }
}

console.log("Answer: " + total);