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
    console.log("LINKED LIST::");
    list.printList();

}

main();
