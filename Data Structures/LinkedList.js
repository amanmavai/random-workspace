'use strict'
var MYAPP = MYAPP || {};


MYAPP.ListApi = (function() {

    /**
     * Node Object of the LinkedList
     *
     */
    var Node = function(data) {
        this.data = data;
        this.next = null;
    };
    
    /**
     * LinkedList Object
     *
     */
    var LinkedList = function() {
        this.head = null;
    };
    LinkedList.prototype.addNodeAtEnd = function(data) {
        var newNode = new Node(data);
        /*If the Linked List is empty, then make the new node as head */
        if(this.head === null){
            this.head = newNode;
            return;
        }
        
        var currentNode = this.head;
        
        /*Else traverse till the last node */
        while(currentNode.next !== null){
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return;
    };
    LinkedList.prototype.addNodeAtFront = function(data) {
        var newNode = new Node(data);
        
        /* Make next of new node as head */
        newNode.next = this.head;
        
        this.head = newNode;
        
        return;
    };
    LinkedList.prototype.deleteNode = function(key) {
        var temp = this.head, prev;
        
        // If head node itself holds the key to be deleted
        if (temp != null && temp.data == key)
        {
            this.head = temp.next;   // Changed head
            temp = null;             // free old head
            return;
        }
        
        // Search for the key to be deleted, keep track of the
        // previous node as we need to change 'prev->next'
        while (temp != null && temp.data != key)
        {
            prev = temp;
            temp = temp.next;
        }
        
        // If key was not present in linked list
        if (temp == null) return;
    
        //If key was present then Unlink the node from linked list
        prev.next = temp.next;
     
        temp = null;  // Free memory
    };
    LinkedList.prototype.printList = function() {
          var currentNode = this.head;
          while (currentNode !== null)
          {
             console.log(currentNode.data);
             currentNode = currentNode.next;
          }
    };

    /**
     * Public Api
     *
     */
    return {
        LinkedList:LinkedList
    };

})();


function main() {
    
    var list = new MYAPP.ListApi.LinkedList();
    list.addNodeAtEnd(10);
    list.addNodeAtEnd(15);
    list.addNodeAtFront(5);
    list.addNodeAtFront(4);
    console.log("LINKED LIST::");
    list.printList();
    
    list.deleteNode(5);
    console.log("AFTER DELETION::");
    list.printList();
}

main();
