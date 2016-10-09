
// a structure to represent an edge in graph
function Edge()
{
    this.src = null;
    this.dest = null;
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
 
// A utility function to find the subset of an element i
function find(parent, i)
{
    if (parent[i] == -1)
        return i;
    return find(parent, parent[i]);
}
 
// A utility function to do union of two subsets 
function Union(parent, x, y)
{
    var xset = find(parent, x);
    var yset = find(parent, y);
    parent[xset] = yset;
}
 
// The main function to check whether a given graph contains 
// cycle or not
function isCycle(graph )
{
    var parent = [-1,-1,-1];
    
 
    // Iterate through all edges of graph, find subset of both
    // vertices of every edge, if both subsets are same, then 
    // there is cycle in graph.
    for(var i = 0; i < graph.E; ++i)
    {
        var x = find(parent, graph.edges[i].src);
        var y = find(parent, graph.edges[i].dest);
 
        if (x == y)
            return 1;
 
        Union(parent, x, y);
    }
    return 0;
}
 
// Driver program to test above functions
function main()
{
    /* Let us create following graph
         0
        |  \
        |    \
        1-----2 */    
    var V = 3, E = 3;
    var graph = createGraph(V, E);
 
    // add edge 0-1
    graph.edges[0] = new Edge();
    graph.edges[0].src = 0;
    graph.edges[0].dest = 1;
 
    // add edge 1-2
    graph.edges[1] = new Edge();
    graph.edges[1].src = 1;
    graph.edges[1].dest = 2;
 
    // add edge 0-2
    graph.edges[2] = new Edge();
    graph.edges[2].src = 0;
    graph.edges[2].dest = 2;
 
    if (isCycle(graph))
        console.log( "graph contains cycle" );
    else
        console.log( "graph doesn't contain cycle" );
}
main();