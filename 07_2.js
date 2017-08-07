// --- Day 7: Some Assembly Required ---
// http://adventofcode.com/2015/day/7

var fs = require('fs');
var rawData = fs.readFileSync('07.txt').toString();
var oneDArray = rawData.split('\n');
var twoDArray = [];
for (var i = 0; i < oneDArray.length; i++) {
    var temporayValue = oneDArray[i].split(' ');
    twoDArray.push(temporayValue);
}

var wireMap = [];

for (var l = 0; l < 100; l++) { // l < 100  <== to mozna zoptymalizowac
    for (var m = 0; m < twoDArray.length; m++) {
        if (twoDArray[m][0] === 'NOT') {
                wireMap[twoDArray[m][3]] = ~wireMap[twoDArray[m][1]] & 0xFFFF;
        } else if (twoDArray[m][1] === 'LSHIFT') {
                wireMap[twoDArray[m][4]] = (wireMap[twoDArray[m][0]] << Number(twoDArray[m][2])) & 0xFFFF;
        } else if (twoDArray[m][1] === 'RSHIFT') {
                wireMap[twoDArray[m][4]] = (wireMap[twoDArray[m][0]] >> Number(twoDArray[m][2])) & 0xFFFF;
        } else if (twoDArray[m][1] === 'AND') {
                if (Number(twoDArray[m][0])){
                    wireMap[twoDArray[m][4]] = Number(twoDArray[m][0]) & wireMap[twoDArray[m][2]];
                } else {
                    wireMap[twoDArray[m][4]] = wireMap[twoDArray[m][0]] & wireMap[twoDArray[m][2]];
                }
        } else if (twoDArray[m][1] === 'OR') {
                if (Number(twoDArray[m][0])) {
                    wireMap[twoDArray[m][4]] = Number(twoDArray[m][0]) | wireMap[twoDArray[m][2]];
                } else {
                    wireMap[twoDArray[m][4]] = wireMap[twoDArray[m][0]] | wireMap[twoDArray[m][2]];
                }
        } else if (twoDArray[m][1] === '->' && !isNaN(Number(twoDArray[m][0]))) {
            wireMap[twoDArray[m][2]] = Number(twoDArray[m][0]);
        } else if(twoDArray[m][1] === '->' ) {
            wireMap[twoDArray[m][2]] = wireMap[twoDArray[m][0]];
        }
    }
}
console.log(wireMap);
console.log('signal on wire a is: ' + wireMap.a);
//46065