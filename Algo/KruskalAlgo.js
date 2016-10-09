
// a structure to represent an edge in graph
function Edge()
{
    this.src = null;
    this.dest = null;
    this.weight = null;
}
 
// a structure to represent a graph
function Graph()
{
    // V-> Number of vertices, E-> Number of edges
    this.V = 0;
    this.E = 0;
 
    // graph is represented as an array of edges
    this.edges = [];
}
 
// Creates a graph with V vertices and E edges
function createGraph(V, E)
{
    var graph = new Graph();
    graph.V = V;
    graph.E = E;
 
    graph.edges = [];
 
    return graph;
}
 // A structure to represent a subset for union-find
function subset()
{
    this.parent = null;
    this.rank = null;
}

// A utility function to find set of an element i
// (uses path compression technique)
function find(subsets, i)
{
    // find root and make root as parent of i (path compression)
    if (subsets[i].parent != i)
        subsets[i].parent = find(subsets, subsets[i].parent);
 
    return subsets[i].parent;
}
 
// A function that does union of two sets of x and y
// (uses union by rank)
function Union(subsets, x, y)
{
    var xroot = find(subsets, x);
    var yroot = find(subsets, y);
 
    // Attach smaller rank tree under root of high rank tree
    // (Union by Rank)
    if (subsets[xroot].rank < subsets[yroot].rank)
        subsets[xroot].parent = yroot;
    else if (subsets[xroot].rank > subsets[yroot].rank)
        subsets[yroot].parent = xroot;
 
    // If ranks are same, then make one as root and increment
    // its rank by one
    else
    {
        subsets[yroot].parent = xroot;
        subsets[xroot].rank++;
    }
}
 
// The main function to construct MST using Kruskal's algorithm
function KruskalMST(graph)
{
    var V = graph.V;
    var result = [];  // Tnis will store the resultant MST
    var e = 0;  // An index variable, used for result[]
    var i = 0;  // An index variable, used for sorted edges
 
    // Step 1:  Sort all the edges in non-decreasing order of their weight
    // If we are not allowed to change the given graph, we can create a copy of
    // array of edges
    graph.edges.sort(function(a,b) {
        return a.weight - b.weight;
    });
 
    // Allocate memory for creating V ssubsets
    var subsets = [];
 
    // Create V subsets with single elements
    for (var v = 0; v < V; ++v)
    {
        subsets[v] = new subset();
        subsets[v].parent = v;
        subsets[v].rank = 0;
    }
 
    // Number of edges to be taken is equal to V-1
    while (e < V - 1)
    {
        // Step 2: Pick the smallest edge. And increment the index
        // for next iteration
        var next_edge = graph.edges[i++];
 
        var x = find(subsets, next_edge.src);
        var y = find(subsets, next_edge.dest);
 
        // If including this edge does't cause cycle, include it
        // in result and increment the index of result for next edge
        if (x != y)
        {
            result[e++] = next_edge;
            Union(subsets, x, y);
        }
        // Else discard the next_edge
    }
 
    // print the contents of result[] to display the built MST
    console.log("Following are the edges in the constructed MST\n");
    for (i = 0; i < e; ++i)
        console.log("%d -- %d == %d\n", result[i].src, result[i].dest,
                                                   result[i].weight);
    return;
}
 
// Driver program to test above functions
function main()
{
    /* Let us create following weighted graph
             10
        0--------1
        |  \     |
       6|   5\   |15
        |      \ |
        2--------3
            4       */
    var V = 4;  // Number of vertices in graph
    var E = 5;  // Number of edges in graph
    var graph = createGraph(V, E);
 
 
    // add edge 0-1
    graph.edges[0] = new Edge();
    graph.edges[0].src = 0;
    graph.edges[0].dest = 1;
    graph.edges[0].weight = 10;
 
    // add edge 0-2
    graph.edges[1] = new Edge();
    graph.edges[1].src = 0;
    graph.edges[1].dest = 2;
    graph.edges[1].weight = 6;
 
    // add edge 0-3
    graph.edges[2] = new Edge();
    graph.edges[2].src = 0;
    graph.edges[2].dest = 3;
    graph.edges[2].weight = 5;
 
    // add edge 1-3
    graph.edges[3] = new Edge();
    graph.edges[3].src = 1;
    graph.edges[3].dest = 3;
    graph.edges[3].weight = 15;
 
    // add edge 2-3
    graph.edges[4] = new Edge();
    graph.edges[4].src = 2;
    graph.edges[4].dest = 3;
    graph.edges[4].weight = 4;
 
    KruskalMST(graph);
 
    return 0;
}
main();