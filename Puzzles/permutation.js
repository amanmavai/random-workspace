// var permArr = [],
//   usedChars = [];

// function permute(input) {
//   var i, ch;
//   for (i = 0; i < input.length; i++) {
//     ch = input.splice(i, 1)[0];
//     usedChars.push(ch);
//     if (input.length == 0) {
//       permArr.push(usedChars.slice());
//     }
//     permute(input);
//     input.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   return permArr;
// }


// console.log(JSON.stringify(permute([5, 3])));

//Utility Method
function swap(arr,l,r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

/* Function to print permutations of string
   This function takes three parameters:
   1. String
   2. Starting index of the string
   3. Ending index of the string. */
function permute(a, l, r)
{
   var i;
   if (l == r)
     console.log(a.join(''));
   else
   {
       for (i = l; i <= r; i++)
       {
          swap(a, l, i);
          permute(a, l+1, r);
          swap(a, l, i); //backtrack
       }
   }
}

permute(['A','B','C','D'],0,3);