var isPowerOfThree = function(x) {
    var pattern = /^10*$/;
    return pattern.test(x.toString(3));
};

console.log(isPowerOfThree(81));
