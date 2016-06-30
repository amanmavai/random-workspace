function processData(input) {
    var terms = input.split('\n');
    var t = terms.splice(0,1).map(Number)[0];
    
    var i = 0;
    while(t--){        
        var firstWord = terms[i];
        var secondWord = terms[i+1];
        var flag = "NO"; 
        var source = "abcdefghijklmnopqrstuvwxyz".split('');
        for(var k=0;k<source.length;k++)
        {
          if(firstWord.indexOf(source[k]) > -1 && secondWord.indexOf(source[k]) > -1)
          flag = "YES";
        }
        console.log(flag);
        i = i+2;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
