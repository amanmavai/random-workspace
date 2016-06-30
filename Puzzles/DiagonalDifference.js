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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var primaryDiagonal = 0,secondaryDiagonal=0;
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(i===j){primaryDiagonal+=a[i][j];}
            if(i===(n-j-1)){secondaryDiagonal+=a[i][j];}
        }
    }
    console.log(Math.abs(primaryDiagonal-secondaryDiagonal));
}
