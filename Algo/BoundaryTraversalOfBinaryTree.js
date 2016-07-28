function Node(data) { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
}
// A function to print all left boundry nodes, except a leaf node.
// Print the nodes in TOP DOWN manner
function printLeftBoundary(root) {
    if(root){
      if(root.left){
           // to ensure top down order, print the node
            // before calling itself for left subtree
          console.log(root.data);
          printLeftBoundary(root.left);
      }
      else if(root.right){
          console.log(root.data);
          printLeftBoundary(root.right);
      }
      // do nothing if it is a leaf node, this way we avoid
        // duplicates in output
    }  
}
function printLeaves(root) {
    if(root){
        printLeaves(root.left);
        if(!root.left && !root.right)
        {
            console.log(root.data);
        }
        printLeaves(root.right);
    }
}
function printRightBoundary(root) {
   if(root){
      if(root.right){
          printRightBoundary(root.right);
          console.log(root.data);
      }
      else if(root.left){
          printRightBoundary(root.left);
          console.log(root.data);
      }
    }  
}
function printBoundary(root) {
  if (root)
    {
        console.log(root.data);
 
        // Print the left boundary in top-down manner.
        printLeftBoundary(root.left);
 
        // Print all leaf nodes
        printLeaves(root.left);
        printLeaves(root.right);
 
        // Print the right boundary in bottom-up manner
        printRightBoundary(root.right);
    }
}
function main() {
    var root = new Node(20);
    root.left = new Node(8);
    root.left.left = new Node(4);
    root.left.right = new Node(12);
    root.left.right.left   = new Node(10);
    root.left.right.right  = new Node(14);
    root.right  = new Node(22);
    root.right.right = new Node(25);
    
    printBoundary(root);
}
main();