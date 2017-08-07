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
//console.log(twoDArray);

var wireMap = [];
// var helper;
// for (var j = 0; j < twoDArray.length; j++) {
//     helper = twoDArray[j][twoDArray[j].length - 1];
//     wireMap[helper] = 'noData';
// }

for (var l = 0; l < 100; l++) { // l < 100 przerobie na sprawdzanie
    for (var m = 0; m < twoDArray.length; m++) {
        if (twoDArray[m][0] === 'NOT') {
            if ((wireMap[twoDArray[m][1]]) !== 'noData') {
                wireMap[twoDArray[m][3]] = ~wireMap[twoDArray[m][1]] & 0xFFFF;
            }
        } else if (twoDArray[m][1] === 'LSHIFT') {
            if ((wireMap[twoDArray[m][0]]) !== 'noData') {
                wireMap[twoDArray[m][4]] = (wireMap[twoDArray[m][0]] << Number(twoDArray[m][2])) & 0xFFFF;
            }
        } else if (twoDArray[m][1] === 'RSHIFT') {
            if ((wireMap[twoDArray[m][0]]) !== 'noData') {
                wireMap[twoDArray[m][4]] = (wireMap[twoDArray[m][0]] >> Number(twoDArray[m][2])) & 0xFFFF;
            }
        } else if (twoDArray[m][1] === 'AND') {
            if ((wireMap[twoDArray[m][0]]) !== 'noData' && (wireMap[twoDArray[m][2]]) !== 'noData') {
                if (Number(twoDArray[m][0])){
                    wireMap[twoDArray[m][4]] = Number(twoDArray[m][0]) & wireMap[twoDArray[m][2]];
                } else {
                    wireMap[twoDArray[m][4]] = wireMap[twoDArray[m][0]] & wireMap[twoDArray[m][2]];
                }
            }
        } else if (twoDArray[m][1] === 'OR') {
            if ((wireMap[twoDArray[m][0]]) !== 'noData' && (wireMap[twoDArray[m][2]]) !== 'noData') {
                if (Number(twoDArray[m][0])) {
                    wireMap[twoDArray[m][4]] = Number(twoDArray[m][0]) | wireMap[twoDArray[m][2]];
                } else {
                    wireMap[twoDArray[m][4]] = wireMap[twoDArray[m][0]] | wireMap[twoDArray[m][2]];
                }
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