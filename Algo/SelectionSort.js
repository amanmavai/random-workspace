
//Utility Method
function swap(arr,l,r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

// A function to implement selection sort
function selectionSort(arr)
{
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i+1; j < arr.length; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx,i);
    }
}



var arr = [8,54,26,93,17,77,77,31,44,55,20,6];
selectionSort(arr);
console.log(arr);


