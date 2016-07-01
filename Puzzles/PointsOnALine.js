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
    var n = parseInt(readLine());
    var result = [];
    for(var a0 = 0; a0 < n; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        result.push({xval:x,yval:y});
    }
    var xarr = result.map(function(item){return item.xval});
    var yarr = result.map(function(item){return item.yval});
    
    var xtest = xarr.every(function(item){return item===xarr[0]});
    var ytest = yarr.every(function(item){return item===yarr[0]});
    
    if(xtest || ytest)
        console.log('YES');
    else
        console.log('NO');
}
