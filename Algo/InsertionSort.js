
//Utility Method
function swap(arr,l,r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function insertionSort(arr) {
  
  for(var i=1;i<arr.length;i++){
      var j=i;
      for(var k=j;k>0;k--){
          if(arr[k]<arr[k-1]){
              swap(arr,k-1,k);
          }
      }
  }
}



var arr = [8,54,26,93,17,77,77,31,44,55,20,6];
insertionSort(arr);
console.log(arr);


