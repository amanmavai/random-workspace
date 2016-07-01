function mergeSort(arr) {

    if (arr.length > 1) {
        var mid = Math.floor(arr.length / 2);

        //Create left and right temp subarrays
        var lefthalf = arr.slice(0, mid);
        var righthalf = arr.slice(mid, arr.length);

        //Recursively sort the left and right subarray.
        mergeSort(lefthalf);
        mergeSort(righthalf);
        merge(lefthalf, righthalf, arr);

    }

}

//Merges the two sorted subarrays into arr
function merge(lefthalf, righthalf, arr) {
    var leftmark = 0, //Initial index of left subarray
        rightmark = 0, //Initial index of right subarray
        k = 0; //Initial index of merged subarray

    while (leftmark < lefthalf.length && rightmark < righthalf.length) {
        if (lefthalf[leftmark] < righthalf[rightmark]) {
            arr[k] = lefthalf[leftmark];
            leftmark++;
        }
        else {
            arr[k] = righthalf[rightmark];
            rightmark++;
        }
        k++;
    }

    // Copy the remaining elements of lefthalf[], if there are any
    while (leftmark < lefthalf.length) {
        arr[k] = lefthalf[leftmark];
        leftmark++;
        k++;
    }
    // Copy the remaining elements of righthalf[], if there are any
    while (rightmark < righthalf.length) {
        arr[k] = righthalf[rightmark];
        rightmark++;
        k++;
    }
}

var arr = [54, 26, 93, 17, 77, 31, 44, 55, 20];
mergeSort(arr);
console.log(arr);
