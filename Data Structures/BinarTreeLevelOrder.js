function Node(data) { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
}

function main() { 
   var n= new Node(1); 
   
   n.left = new Node(2);
   n.right = new Node(3);
   
   n.left.left = new Node(4);
   n.left.right = new Node(7);
   
   n.right.left = new Node(11);
   n.right.right = new Node(9);
   
   n.left.left.right = new Node(19);
   n.left.left.left = new Node(12);
   
   console.log("PRINTING LEVELORDER");
   printLevelOrder(n);

} 

main();

/* Function to print level order traversal a tree*/
function printLevelOrder(root)
{
    var h = height(root);
    var i;
    for (i=1; i<=h; i++)
        printGivenLevel(root, i);
}
 
/* Print nodes at a given level */
function printGivenLevel(root, level)
{
    if (root == null)
        return;
    if (level == 1)
       console.log(root.data);
    else if (level > 1)
    {
        printGivenLevel(root.left, level-1);
        printGivenLevel(root.right, level-1);
    }
}
 
/* Compute the "height" of a tree -- the number of
    nodes along the longest path from the root node
    down to the farthest leaf node.*/
function height(node)
{
    if (node==null)
        return 0;
    else
    {
        /* compute the height of each subtree */
        var lheight = height(node.left);
        var rheight = height(node.right);
 
        /* use the larger one */
        if (lheight > rheight)
            return(lheight+1);
        else return(rheight+1);
    }
}