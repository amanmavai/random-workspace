'use strict'
var MYAPP = MYAPP || {};


MYAPP.BinaryTreeApi = (function() {

    /**
     * Node Object of the Binary Tree
     *
     */
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };
    
    /**
     * Binary Tree Object
     *
     */
    var BinaryTree = function() {
        
    };
    
    /* Given a binary tree, print its nodes in inorder*/
    BinaryTree.prototype.printInorder =  function(node) {
        if (node == null)
            return;

        /* first recur on left child */
        this.printInorder(node.left);

        /* then print the data of node */
        console.log(node.data);

        /* now recur on right child */
        this.printInorder(node.right);
    };
    /* A utility function to insert a new node with given key in BST */
    BinaryTree.prototype.insert = function(node, key) {
        /* If the tree is empty, return a new node */
        if (node == null) return new Node(key);
    
        /* Otherwise, recur down the tree */
        if (key < node.data)
            node.left = this.insert(node.left, key);
        else if (key > node.data)
            node.right = this.insert(node.right, key);
    
        /* return the (unchanged) node pointer */
        return node;
    };
   /* function to search a given key in a given BST */
    BinaryTree.prototype.search = function (root, key) {
        // Base Cases: root is null or key is present at root
        if (root == null || root.data == key)
            return root;
    
        // Key is greater than root's key
        if (root.data < key)
            return this.search(root.right, key);
    
        // Key is smaller than root's key
        return this.search(root.left, key);
    };

    /**
     * Public Api
     *
     */
    return {
        Node:Node,
        BinaryTree: BinaryTree
    };

})();

function main() {
    var root = new MYAPP.BinaryTreeApi.Node(55);
    var bt = new MYAPP.BinaryTreeApi.BinaryTree();
    bt.insert(root, 50);
    bt.insert(root, 30);
    bt.insert(root, 20);
    bt.insert(root, 40);
    bt.insert(root, 70);
    bt.insert(root, 60);
    bt.insert(root, 80);

    // print inoder traversal of the BST
    console.log("PRINTING INORDER");
    bt.printInorder(root);

    console.log("SEARCH OPERATION");
    console.log(bt.search(root, 70));
}

main();