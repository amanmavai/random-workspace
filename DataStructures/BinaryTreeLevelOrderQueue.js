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
   // Base Case
    if (root == null)  return;
 
    // Create an empty queue for level order tarversal
    var q = [];
 
    // Enqueue Root and initialize height
    q.push(root);
 
    while (q.length)
    {
        // Print front of queue and remove it from queue
        var node = q.shift();
        console.log(node.data);
       
 
        /* Enqueue left child */
        if (node.left != null)
            q.push(node.left);
 
        /*Enqueue right child */
        if (node.right != null)
            q.push(node.right);
    }
}
