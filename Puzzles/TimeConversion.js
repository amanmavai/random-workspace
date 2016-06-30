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
    var time = readLine();
    var suffix = time.slice(-2);
    var actualTime = time.split(suffix)[0];
    var result = "";
    if(suffix === "AM"){
        if(actualTime.split(':')[0] === "12"){
            result = "00:"+actualTime.split(':')[1]+":"+actualTime.split(':')[2];
        }
        else{
            result = actualTime;
        }
   
    }
    else{
        if(actualTime.split(':')[0] === "12"){
           result = "12:"+actualTime.split(':')[1]+":"+actualTime.split(':')[2];
        }
        else{
            result = (parseInt(actualTime.split(':')[0]) + 12)+':'+actualTime.split(':')[1]+':'+actualTime.split(':')[2];
        }      
    }
    console.log(result);
}
