'use strict';
// Refer:http://www.geeksforgeeks.org/greedy-algorithms-set-1-activity-selection-problem/
function printMaxActivities(s,f) {
   console.log("Following Activities are selected:");
   var res = [];  // array contains final result
   
   var i = 0;
   // The first activity always gets selected
   res.push(i);
   
   // Consider rest of the activities
    for (let j = 1; j < s.length; j++)
    {
      // If this activity has start time greater than or
      // equal to the finish time of previously selected
      // activity, then select it
      if (s[j] >= f[i])
      {
          i = j;
          res.push(i);
      }
    }
    console.log(res);
}



function main() {
    var s =  [1, 3, 0, 5, 8, 5];
    var f =  [2, 4, 6, 7, 9, 9];
    printMaxActivities(s, f);
}
main();