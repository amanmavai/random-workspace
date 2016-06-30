function binarySearch(arr, left, right, x) {

    while (right >= left) {
        var mid = left + Math.floor((right - left) / 2);

        if (x === arr[mid]) return mid;
        else if (x < arr[mid]) right = mid-1;
        else return left = mid+1;
    }

   return -1;
}


console.log(binarySearch([4, 5, 6, 32, 34, 45], 0, 5, 4));