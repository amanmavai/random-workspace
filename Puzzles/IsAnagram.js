var isAnagram = function(s, t) {
    var source = "abcdefghijklmnopqrstuvwxyz".split('');
    var firstcount = 0;
    var secondcount = 0;
    
    var regex;
    for (var k = 0; k < source.length; k++) {
        regex = new RegExp(source[k], "g");
        firstcount = s.match(regex) === null ? 0 : s.match(regex).length;
        secondcount = t.match(regex) === null ? 0 : t.match(regex).length;

        if (firstcount !== secondcount)
            return false;
    }
    return true;
};
