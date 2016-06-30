function binarySearch(arr, left, right, x) {

    if (right >= left) {
        var mid = left + Math.floor((right - left) / 2);

        if (x === arr[mid]) return mid;
        else if (x < arr[mid]) return binarySearch(arr, left, mid - 1, x);
        else return binarySearch(arr, mid + 1, right, x);
    }

   return -1;
}


console.log(binarySearch([4, 5, 6, 32, 34, 45], 0, 5, 32));