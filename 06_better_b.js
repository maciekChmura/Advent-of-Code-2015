// --- Day 6: Probably a Fire Hazard ---
// --- Part Two ---
// http://adventofcode.com/2015/day/6

function readInput() {
    var fs = require("fs");
    var inputString = fs.readFileSync("06.txt", "utf8");
    var input = inputString.split("\n");
    var result = [];
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].split(" ");
        if (input[i][0] === "turn") {
            input[i][0] = input[i][0] + input[i][1];
            input[i].splice(1, 1);
        }

        var start = input[i][1].split(',');
        var xStart = Number(start[0]);
        var xEnd = Number((input[i][3].split(',')[0]));
        var yStart = Number(start[1]);
        var yEnd = Number((input[i][3].split(',')[1]));
        console.log(xStart, xEnd, yStart, yEnd);
        var inputElement = {
            xStart: xStart,
            xEnd: xEnd,
            yStart: yStart,
            yEnd: yEnd,
            command: input[i][0]
        };
        result.push(inputElement);
    }
    return result;
}

function generateLightGrid(size) {
    var lights = [];
    for (var i = 0; i < size; i++) {
        lights[i] = [];
        for (var j = 0; j < size; j++) {
            lights[i][j] = 0;
        }
    }
    return lights;
}

var input = readInput();
var lights = generateLightGrid(1000);


for (var a = 0; a < input.length; a++) { //zczytywanie danych
    for (var i = input[a].yStart; i <= input[a].yEnd; i++) { //wypełnia array 0 i 1 w zależności od danych
        for (var j = input[a].xStart; j <= input[a].xEnd; j++) {

            if (input[a].command === "turnoff" && lights[i][j] > 0) {
                lights[i][j] -= 1;
            } else if (input[a].command === "turnon") {
                lights[i][j] += 1;
            } else if (input[a].command === "toggle") {
                lights[i][j] += 2;
            }
        }
    }
}

function countLights(lights) {
    var total = 0;
    for (var i = 0; i < lights.length; i++) {
        for (var j = 0; j < lights[i].length; j++) {
            total += lights[i][j];
        }
    }
    return total;
}

var total = countLights(lights);
console.log("WOW... to jest odpowiedz: " + total);
