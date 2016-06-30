var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var allPossiblePerms = permute(words);
    var result = allPossiblePerms.map(function(item) {
        return item.join('');
    });
  var final = result.filter(function(item) {
      if(s.indexOf(item)===-1)
      return false;
      else
      return true;
    });
  var res = final.map(function(item) {
      return s.indexOf(item);
  });
  return res;
};

findSubstring("barfoofoobarthefoobarman",["bar","foo","the"]);