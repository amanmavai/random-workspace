
//Utility Method
function swap(arr,l,r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function quickSort(arr) {
  quickSortHelper(arr,0,arr.length-1);
}

function quickSortHelper(arr,left,right){
    if(left<right){
       var splitpoint = partition(arr,left,right);

       quickSortHelper(arr,left,splitpoint-1); // recursively quicksort left subarray
       quickSortHelper(arr,splitpoint+1,right);// recursively quicksort right subarray 
    }
}

//partitions the array and returns the pivot position
function partition(arr,left,right) {
  var pivot = arr[left];
   var leftmark = left+1,rightmark=right;
   
   while(leftmark<=rightmark){
       while(arr[leftmark]<pivot && leftmark<=rightmark){
           leftmark++;
       }
       
       while(arr[rightmark]>pivot && leftmark<=rightmark){
           rightmark--;
       }
       
       if(leftmark<=rightmark){
           if(leftmark!==rightmark)
           swap(arr,leftmark,rightmark);
          
          leftmark++;
          rightmark--;
       }
   }
   //Now pivot goes to its ri8 place
   swap(arr,left,rightmark);
   
   return rightmark;
}

var arr = [8,54,26,93,17,77,77,31,44,55,20,6];
quickSort(arr);
console.log(arr);


