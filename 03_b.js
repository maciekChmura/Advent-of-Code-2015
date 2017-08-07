// --- Day 3: Perfectly Spherical Houses in a Vacuum ---
// --- Part Two ---
// http://adventofcode.com/2015/day/3

var fs = require("fs");
var string = fs.readFileSync("03.txt", "utf8");
var arr = string.split("");

var xSanta = 0;
var ySanta = 0;
var xRobot = 0;
var yRobot = 0;
var cordSanta = "0x0";
var cordRobot = "0x0";
var housesCord = new Set();

cord = xSanta + "x" + ySanta;

housesCord.add(cord);

for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {

        switch (arr[i]) {
            case "^":
                ySanta++;
                addCordSanta();
                break;
            case ">":
                xSanta++;
                addCordSanta();
                break;
            case "v":
                ySanta--;
                addCordSanta();
                break;
            case "<":
                xSanta--;
                addCordSanta();
                break;
            default:

        }
    } else {
        switch (arr[i]) {
            case "^":
                yRobot++;
                addCordRobot();
                break;
            case ">":
                xRobot++;
                addCordRobot();
                break;
            case "v":
                yRobot--;
                addCordRobot();
                break;
            case "<":
                xRobot--;
                addCordRobot();
                break;
            default:

        }
    }

    function addCordSanta() {
        cordSanta = xSanta + "x" + ySanta;
        housesCord.add(cordSanta);
    }

    function addCordRobot() {
        cordRobot = xRobot + "x" + yRobot;
        housesCord.add(cordRobot);
    }
}
console.log(housesCord);
console.log(housesCord.size);
