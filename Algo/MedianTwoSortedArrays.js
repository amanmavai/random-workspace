
 
/* This function returns median of ar1[] and ar2[].
   Assumptions in this function:
   Both ar1[] and ar2[] are sorted arrays
   Both have n elements */
function getMedian2(ar1, ar2)
{
    var i = 0;  /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
 
    /* Since there are 2n elements, median will be average
     of elements at index n-1 and n in the array obtained after
     merging ar1 and ar2 */
    for (count = 0; count <= ar1.length; count++)
    {
        /*Below is to handle case where all elements of ar1[] are
          smaller than smallest(or first) element of ar2[]*/
        if (i == ar1.length)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        /*Below is to handle case where all elements of ar2[] are
          smaller than smallest(or first) element of ar1[]*/
        else if (j == ar1.length)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
 
        if (ar1[i] < ar2[j])
        {
            m1 = m2;  /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;  /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

function getMedian(ar1,ar2,n) {
    if(n<=0)
    return -1;
    
    if(n === 1)
    return (ar1[0] + ar2[0])/2;
    
    if(n === 2)
    return (Math.max(ar1[0],ar2[0]) + Math.min(ar1[1],ar2[1]))/2;
    
    var m1 = median(ar1); /* get the median of the first array */
    var m2 = median(ar2); /* get the median of the second array */
    
   if (m1 < m2)
    {
        if (n % 2 == 0)
            return getMedian(ar1.slice(n/2 - 1), ar2, n - n/2 +1);
        return getMedian(ar1.slice(Math.floor(n/2)), ar2, n - Math.floor(n/2));
    }
 
    /* if m1 > m2 then median must exist in ar1[....m1] and
        ar2[m2...] */
    if (n % 2 == 0)
         return getMedian(ar2.slice(n/2 - 1), ar1, n - n/2 +1);
     return getMedian(ar2.slice(Math.floor(n/2)), ar1, n - Math.floor(n/2));
    
}
/* Function to get median of a sorted array */
function median(arr)
{
    var n = arr.length;
    if (n%2 == 0)
        return (arr[n/2] + arr[n/2-1])/2;
    else
        return arr[Math.floor(n/2)];
}
function main() {
  var m = getMedian([2,5,8],[9,34,56],3);
  console.log(m);
}
main();