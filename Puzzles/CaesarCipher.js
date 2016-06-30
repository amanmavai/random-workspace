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
    var s = readLine();
    var k = parseInt(readLine());
    k = (k%26);
    var result = "";
    //97 to 122 smalls and 65 to 90 for Caps  
    for(var i=0;i<n;i++){
        //Capital Case
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90)
        {
           if((s.charCodeAt(i)+k)>90) 
               result += String.fromCharCode(64 + (s.charCodeAt(i)+k)%90);
           else
               result += String.fromCharCode(s.charCodeAt(i)+k);
        } //Small Case
        else if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122)
        {
           if((s.charCodeAt(i)+k)>122) 
               result += String.fromCharCode(96 + (s.charCodeAt(i)+k)%122);
           else 
               result += String.fromCharCode(s.charCodeAt(i)+k);
        } //Rest
        else
            {
               result += String.fromCharCode(s.charCodeAt(i)); 
            }
    }
    console.log(result);    
}
