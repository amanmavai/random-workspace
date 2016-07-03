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
   console.log(n);
} 

main();