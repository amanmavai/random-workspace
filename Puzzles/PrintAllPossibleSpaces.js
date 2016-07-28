
 
/* Function recursively prints the strings having space pattern.
   i and j are indices in 'str[]' and 'buff[]' respectively */
function printPatternUtil(str, buff, i, j)
{
    if (i===str.length)
    {
        buff[j] = '\0';
        console.log(buff.join(''));
        return;
    }
 
    // Either put the character
    buff[j] = str[i];
    printPatternUtil(str, buff, i+1, j+1);
 
    // Or put a space followed by next character
    buff[j] = ' ';
    buff[j+1] = str[i];
 
    printPatternUtil(str, buff, i+1, j+2);
}
 
// This function creates buf[] to store individual output string and uses
// printPatternUtil() to print all permutations.
function printPattern(str)
{
    var buf = [];
    // Copy the first character as it is, since it will be always
    // at first position
    buf.push(str[0]);
 
    printPatternUtil(str, buf, 1, 1);
}
 
// Driver program to test above functions
function main()
{
    var str = "ABCD";
    printPattern(str);
    return 0;
}

main();