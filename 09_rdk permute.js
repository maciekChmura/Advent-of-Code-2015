function Permutator() {
    this._permutations = [];
}
Permutator.prototype._heapsPermute = function (array, n) {
    n = n || array.length; // set n default to array.length
    if (n === 1) {
        var temp = array.slice();
        this._permutations.push(temp);
    } else {
        for (var i = 1; i <= n; i++) {
            this._heapsPermute(array, n - 1);
            if (n % 2) {
                var j = 1;
            } else {
                var j = i;
            }
            this._swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
        }
    }
};
Permutator.prototype._swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};
Permutator.prototype.permute = function(input) {
    this._permutations = [];
    this._heapsPermute(input.slice());
    return this._permutations;
};
var permutator = new Permutator();
permutator.permute([1, 2, 3]);
console.log(permutator);