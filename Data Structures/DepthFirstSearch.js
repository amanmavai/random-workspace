// /* A Queue object for queue-like functionality over JavaScript arrays. */
// var Queue = function() {
//     this.items = [];
// };
// Queue.prototype.enqueue = function(obj) {
//     this.items.push(obj);
// };
// Queue.prototype.dequeue = function() {
//     return this.items.shift();
// };
// Queue.prototype.isEmpty = function() {
//     return this.items.length === 0;
// };

// global namespace
var MYAPP = MYAPP || {};


MYAPP.GraphApi = (function() {
    /** Class obj **/
    var Graph = function(V) {
        // Initialize the V vertices and adjacency list for those vertices.
        this._V = V;
        this._adjList = [];

        for (var k = 0; k < V; k++) {
            this._adjList[k] = [];
        }

    };

    Graph.prototype.addEdge = function(v, w) {
        this._adjList[v].push(w); // Add w to v’s list. 
    };
    
    Graph.prototype.dfs = function(s) {
        // Mark all the vertices as not visited
        var visited = [];
        for (var i = 0; i < this._V; i++)
            visited[i] = false;

        // Create a queue for BFS
        var stack = [];

        // Mark the current node as visited and enqueue it
        visited[s] = true;
        stack.push(s);

        // 'i' will be used to get all adjacent vertices of a vertex

        var res = [];
        while (stack.length>0) {
            // Dequeue a vertex from queue and print it
            s = stack.pop();
            res.push(s);

            // Get all adjacent vertices of the dequeued vertex s
            // If a adjacent has not been visited, then mark it visited
            // and enqueue it
            this._adjList[s].forEach(function(j) {
                if (!visited[j]) {
                    visited[j] = true;
                    stack.push(j);
                }
            });
        }
        console.log(res.join(' '));
    };


    return {
        Graph: Graph
    };

})();


function main() {
    // Create a graph given in the above diagram
    var g = new MYAPP.GraphApi.Graph(4);

    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    console.log("Following is Breadth First Traversal (starting from vertex 2)");
    g.dfs(2);
}

main();
