function Node(data) { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
}

function main() { 

    var root = null;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 20);
    insert(root, 40);
    insert(root, 70);
    insert(root, 60);
    insert(root, 80);
  
   // print inoder traversal of the BST
   console.log("PRINTING INORDER");
   printInorder(root);
   
   console.log("SEARCH OPERATION");
   console.log(search(root, 70));
} 

main();


 
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

/* A utility function to insert a new node with given key in BST */
function insert(node, key)
{
    /* If the tree is empty, return a new node */
    if (node == null) return new Node(key);
 
    /* Otherwise, recur down the tree */
    if (key < node.data)
        node.left  = insert(node.left, key);
    else if (key > node.data)
        node.right = insert(node.right, key);   
 
    /* return the (unchanged) node pointer */
    return node;
}
  
  
// function to search a given key in a given BST
function search(root, key)
{
    // Base Cases: root is null or key is present at root
    if (root == null || root.data == key)
       return root;
    
    // Key is greater than root's key
    if (root.data < key)
       return search(root.right, key);
 
    // Key is smaller than root's key
    return search(root.left, key);
}  
  
  
  
  
  
  
  