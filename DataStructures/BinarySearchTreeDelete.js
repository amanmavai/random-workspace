function Node(data) { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
}

function main() { 
     /* Let us create following BST
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 */

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
   
   console.log("\nDelete 20\n");
    root = deleteNode(root, 20);
    console.log("Inorder traversal of the modified tree \n");
    printInorder(root);
 
    console.log("\nDelete 30\n");
    root = deleteNode(root, 30);
    console.log("Inorder traversal of the modified tree \n");
    printInorder(root);
 
    console.log("\nDelete 50\n");
    root = deleteNode(root, 50);
    console.log("Inorder traversal of the modified tree \n");
    printInorder(root);
} 

main();

/* Given a binary search tree and a key, this function deletes the key
   and returns the new root */
function deleteNode(root, key)
{
    // base case
    if (root == null) return root;
 
    // If the key to be deleted is smaller than the root's key,
    // then it lies in left subtree
    if (key < root.data)
        root.left = deleteNode(root.left, key);
 
    // If the key to be deleted is greater than the root's key,
    // then it lies in right subtree
    else if (key > root.data)
        root.right = deleteNode(root.right, key);
 
    // if key is same as root's key, then This is the node
    // to be deleted
    else
    {
        // node with only one child or no child
        if (root.left == null)
        {
            var temp = root.right;
            root = null;
            return temp;
        }
        else if (root.right == null)
        {
            var temp1 = root.left;
            root = null;
            return temp1;
        }
 
        // node with two children: Get the inorder successor (smallest
        // in the right subtree)
        var temp2 = minValueNode(root.right);
 
        // Copy the inorder successor's content to this node
        root.data = temp2.data;
 
        // Delete the inorder successor
        root.right = deleteNode(root.right, temp2.data);
    }
    return root;
}

/* Given a non-empty binary search tree, return the node with minimum
   key value found in that tree. Note that the entire tree does not
   need to be searched. */
function minValueNode(node)
{
    var current = node;
 
    /* loop down to find the leftmost leaf */
    while (current.left != null)
        current = current.left;
 
    return current;
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
  
  
  
  
  
  
  