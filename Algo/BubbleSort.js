
//Utility Method
function swap(arr,l,r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

// A function to implement bubble sort
function bubbleSort(arr)
{
   var i, j;
   for (i = 0; i < arr.length-1; i++)      
 
       // Last i elements are already in place   
       for (j = 0; j < arr.length-i-1; j++) 
           if (arr[j] > arr[j+1])
              swap(arr,j,j+1);
}



var arr = [8,54,26,93,17,77,77,31,44,55,20,6];
bubbleSort(arr);
console.log(arr);


