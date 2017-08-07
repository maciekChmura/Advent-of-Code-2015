// --- Day 5: Doesn't He Have Intern-Elves For This? ---
// --- Part Two ---
// http://adventofcode.com/2015/day/5

//It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

var fs = require("fs");
var string = fs.readFileSync("05.txt", "utf8");
var arr = string.split("\n");
var licznik4 = 0;
for (var i = 0; i < arr.length - 1; i++) {
    var str = arr[i];

    var myRe1 = /a|e|i|o|u/g;
    var myArray1;
    var licznik1 = 0;
    while ((myArray1 = myRe1.exec(str)) !== null) {
        licznik1++;
        //console.log(licznik1);
    }

    var myRe2 = /qq|ww|ee|rr|tt|yy|uu|ii|oo|pp|aa|ss|dd|ff|gg|hh|jj|kk|ll|zz|xx|cc|vv|bb|nn|mm/g;
    var myArray2;
    var licznik2 = 0;
    while ((myArray2 = myRe2.exec(str)) !== null) {
        licznik2++;
        //console.log(licznik2);
    }

    var myRe3 = /ab|cd|pq|xy/g;
    var myArray3;
    var licznik3 = 0;
    while ((myArray3 = myRe3.exec(str)) !== null) {
        licznik3++;
        //console.log(licznik3);
    }
    if (licznik1 > 2 && licznik2 > 0 & licznik3 == 0) {
        licznik4++;
    }

}
console.log(licznik4);
