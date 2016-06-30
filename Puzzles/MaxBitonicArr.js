process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function findmax(arr, left, right) {
    if (right >= left) {
        var mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
        else if (arr[mid] < arr[mid - 1]) return findmax(arr, left, mid - 1); // recurse on the left
        else if (arr[mid] < arr[mid + 1]) return findmax(arr, mid + 1, right);// recurse on the right
    }

    return -1;
}

function main() {

    var arr = readLine().split(' ').map(Number);

    console.log(findmax(arr, 0, arr.length - 1));

}