function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function main() {
    var n = new Node(1);

    n.left = new Node(2);
    n.right = new Node(3);

    n.left.left = new Node(4);
    n.left.right = new Node(5);

    n.right.left = new Node(6);
    n.right.right = new Node(7);

    n.right.left.right = new Node(8);
    n.right.right.right = new Node(9);
    console.log("Vertical Order Traversal is:");
    printVerticalOrder(n);
}

main();


function getVerticalOrder(node, hd, map) {

    if (node == null)
        return;

    if (map[hd] == null)
        map[hd] = [];

    // Store current node in map 'm'
    map[hd].push(node.data);

    // Store nodes in left subtree
    getVerticalOrder(node.left, hd - 1, map);
    // Store nodes in right subtree
    getVerticalOrder(node.right, hd + 1, map);
}

// The main function to print vertical oder of a binary tree
// with given root
function printVerticalOrder(root) {
    // Create a map and store vertical oder in map using
    // function getVerticalOrder()
    var m = {};
    var hd = 0;
    getVerticalOrder(root, hd, m);

    // Traverse the map and print nodes at every horizontal
    // distance (hd)
    for (var key in m) {
        var res = [];
        if (m.hasOwnProperty(key)) {
            for (var j = 0; j < m[key].length; ++j)
                res.push(m[key][j]);
            console.log(res.join(" "));
        }
    }

}
