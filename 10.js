//input = 1321131112;

function lookAndSay(input, cycles) {
    var oldText = input.toString();
    for (var i = 0; i < cycles; i++) {
        var newText = '';
        var counter = 1;
        for (var j = 0; j < oldText.length; j++) {
            if (oldText[j] === oldText[j + 1]) {
                counter++;
            } else {
                newText = newText.concat(counter, oldText[j]);
                counter = 1;
            }
        }
        oldText = newText;
    }
    return newText.length;
}

console.log(lookAndSay(1321131112, 40));
// part two:
console.log(lookAndSay(1321131112, 50));