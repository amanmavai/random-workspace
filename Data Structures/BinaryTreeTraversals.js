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
   
   n.left.left.left = new Node(19);
   
   console.log("PRINTING PREORDER");
   printPreorder(n);
   console.log("PRINTING INORDER");
   printInorder(n);
   console.log("PRINTING POSTORDER");
   printPostorder(n);
   
   
} 

main();


/* Given a binary tree, print its nodes according to the
  "bottom-up" postorder traversal. */
function printPostorder(node)
{
     if (node == null)
        return;
 
     // first recur on left subtree
     printPostorder(node.left);
 
     // then recur on right subtree
     printPostorder(node.right);
 
     // now deal with the node
     console.log(node.data);
}
 
/* Given a binary tree, print its nodes in inorder*/
function printInorder(node)
{
     if (node == null)
          return;
 
     /* first recur on left child */
     printInorder(node.left);
 
     /* then print the data of node */
    console.log(node.data);  
 
     /* now recur on right child */
     printInorder(node.right);
}
 
/* Given a binary tree, print its nodes in preorder*/
function printPreorder(node)
{
     if (node == null)
          return;
 
     /* first print data of node */
    console.log(node.data);
 
     /* then recur on left sutree */
     printPreorder(node.left);  
 
     /* now recur on right subtree */
     printPreorder(node.right);
} 