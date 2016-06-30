function processData(input) {
  var terms = input.split('\n');
  var tests = terms.splice(0,1).map(Number)[0];
  var result = null;
  
  for(var i=0; i<tests; i++) {
    var msize = terms.splice(0,1)[0].split(' ').map(Number);
    var m = terms.splice(0, msize[0]).map(rowToArray);
    var psize = terms.splice(0,1)[0].split(' ').map(Number);
    var p = terms.splice(0, psize[0]).map(rowToArray);
    
    result = findPattern(m, msize[0], msize[1], p, psize[0], psize[1]);
    
    process.stdout.write((result ? 'YES' : 'NO') + '\n');
  }  
} 

function rowToArray(row) {
  return row.split('');
}

function findPattern(M, m, n, P, k, l) {
  var yBorder = m - k + 1;
  var xBorder = n - l + 1;
  
  for(var i=0; i<yBorder; i++) {
    for(var j=0; j<xBorder; j++) {
      if(checkForPattern(M, m, n, i, j, P, k, l)) return true;
    }
  }
  
  return false;
}

function checkForPattern2(M, m, n, i, j, P, k, l) {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  
  for(a = i; a < i + k; a++) {
    for(b = j; b < j + l; b++) {
      if(M[a][b] !== P[a-i][b-j]) return false;
    }
  }
  
  return true;
}

function checkForPattern(M, m, n, i, j, P, k, l) {
  var a = 0;
  var b = 0;
  
  for(a = i; a < i + k; a++) {
    for(b = j; b < j + l; b++) {
      if(M[a][b] !== P[a-i][b-j]) return false;
    }
  }
  
  return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
