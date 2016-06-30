process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var first  = readLine();
    var second = readLine();
    var source = "abcdefghijklmnopqrstuvwxyz".split('');
    
    var firstcount = 0;
    var secondcount = 0;
    var finalresult = first.length + second.length;
    var regex;
    for(var k=0;k<source.length;k++)
    {   regex = new RegExp(source[k], "g");
        firstcount = first.match(regex)===null?0:first.match(regex).length;
        secondcount = second.match(regex)===null?0:second.match(regex).length;
        
        if(firstcount !== 0 && secondcount !== 0){
            finalresult -= 2*(firstcount<=secondcount?firstcount:secondcount);
        }
    }
    
   
    console.log(finalresult);
 
}
