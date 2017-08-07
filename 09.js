// --- Day 9: All in a Single Night ---
// http://adventofcode.com/2015/day/9

var fs = require('fs');
var rawData = fs.readFileSync('09.txt').toString();
var rawDataArray = rawData.split('\n');
var convertedArray = [];
var townsSet = new Set();
var map = {};
var permutations = [];
var distanceArray = [];

for (var i = 0; i < rawDataArray.length; i++) {
    convertedArray.push(rawDataArray[i].split(' '));
}

for (var i = 0; i < convertedArray.length; i++) {
    townsSet.add(convertedArray[i][0])
    townsSet.add(convertedArray[i][2])
}

var towns = Array.from(townsSet);

for (var i = 0; i < towns.length; i++) {
    map[towns[i]] = {};
}

for (var i = 0; i < convertedArray.length; i++) {
    map[convertedArray[i][0]][convertedArray[i][2]] = Number([convertedArray[i][4]]);
    map[convertedArray[i][2]][convertedArray[i][0]] = Number([convertedArray[i][4]])
}

var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};
var heapsPermute = function (array, n) {
    n = n || array.length; // set n default to array.length
    if (n === 1) {
        var temp = array.slice();
        permutations.push(temp);
    } else {
        for (var i = 1; i <= n; i++) {
            heapsPermute(array, n - 1);
            if (n % 2) {
                var j = 1;
            } else {
                var j = i;
            }
            swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
        }
    }
};
function calculateDistance() {
    for (var i = 0; i < permutations.length; i++) {
        var distance = 0;
        var pathName = permutations[i][0] + ' ';
        for (var j = 0; j < permutations[i].length - 1; j++) {
            distance += map[permutations[i][j]][permutations[i][j + 1]];
            pathName += permutations[i][j + 1] + ' '
        }
        distanceArray.push(distance);
        //console.log(distance + ' ' + pathName);
    }
}
heapsPermute(towns);
// console.log('map:');
// console.log(map);
// console.log('permutations:');
// console.log(permutations);
calculateDistance();
console.log('shortest distance is: ' + Math.min(...distanceArray));
// part two:
console.log('longest distance is: ' + Math.max(...distanceArray));
