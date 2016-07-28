'use strict';
var MYAPP = MYAPP || {};


MYAPP.GraphApi = (function() {

    /**
     * Node Object of the Graph
     *
     */
    var Node = function(Name) {
        this.name = Name;
        this.adjList = [];
        this.weight = [];
    };
    Node.prototype.addEdge = function(neighbour, weight) {
        this.adjList.push(neighbour);
        this.weight.push(weight);
    };
    Node.prototype.compare = function(node2) {
        return this.weight - node2.weight;
    };
    Node.prototype.getAdjList = function() {
        return this.adjList;
    };

    /**
     * Graph Object
     *
     */
    var Graph = function() {
        this.isWeighted = false;
        this.nodes = [];
    };
    Graph.prototype.addNode = function(Name) {
        var temp = new Node(Name);
        this.nodes.push(temp);
        return temp;
    };
    Graph.prototype.getNode = function(Name) {
        var node;
        if (this.nodeExist(Name)) {
            this.nodes.forEach(function(item) {
                if (item.name === Name) {
                    node = item;
                }
            });
            return node;
        }
    };
    Graph.prototype.addEdge = function(Name1, Name2) {
        var node1, node2;

        if (!this.nodeExist(Name1))
            node1 = this.addNode(Name1);
        else
            node1 = this.getNode(Name1);

        if (!this.nodeExist(Name2))
            node2 = this.addNode(Name2);
        else
            node2 = this.getNode(Name2);

        node1.addEdge(node2);

    };
    Graph.prototype.removeNode = function(Name) {

        var index = this.nodes.indexOf(Name);
        if (index > -1) {
            this.nodes.splice(index, 1);
            var len = this.nodes.length;

            for (var i = 0; i < len; i++) {
                if (this.nodes[i].adjList.indexOf(Name) > -1) {
                    this.nodes[i].adjList.slice(this.nodes[i].adjList.indexOf(Name));
                    this.nodes[i].weight.slice(this.nodes[i].adjList.indexOf(Name));
                }
            }
        }

    };
    Graph.prototype.nodeExist = function(Name) {
        var exist = this.nodes.some(function(item) {
            return item.name === Name;
        });

        if (exist) {
            return true;
        }
        return false;
    };
    Graph.prototype.getAllNodes = function() {
        return this.nodes;
    };
    Graph.prototype.init = function(adjArr) {
        var self = this;
    
        adjArr.forEach(function(row) {
            
            row.forEach(function(item) {
                
                let itemNode;
                if (!self.nodeExist(item)) {
                    itemNode = new Node(item);
                    self.nodes.push(itemNode);
                } else{
                    itemNode = self.getNode(item);
                }
                if (item !== row[0])
                    self.getNode(row[0]).addEdge(itemNode);
            });
        });
    };
    Graph.prototype.bfs = function() {
        let ans = [];
        let queue = [];
        let startNode = this.nodes[2];
        queue.push(startNode);

        let marked = {};
        while (queue.length != 0) {
            let v = queue.shift();
            marked[v.name] = true;
            console.log(v.name);
            ans.push(v);
            let adjList = v.adjList;
            for (let i = 0; i < adjList.length; i++) {
                let u = adjList[i];
                if (marked[u.name] != true) {
                    queue.push(u);
                    marked[u.name] = true;

                }
            }
        }
        return ans;
    };


    Graph.prototype.dfs = function() {
        let ans = [];
        let stack = [];
        let startNode = this.nodes[0];
        stack.push(startNode);

        let marked = {};
        while (stack.length != 0) {
            var v = stack.pop();
            marked[v.name] = true;
            let adjList = v.adjList;
            console.log(v.name);
            ans.push(v);
            for (let i = 0; i < adjList.length; i++) {
                let u = adjList[i];
                if (marked[u.name] != true) {
                    stack.push(u);
                    marked[u.name] = true;
                }
            }
        }
        return ans;
    };
    /**
     * Public Api
     *
     */
    return {
        Node: Node,
        Graph: Graph
    };

})();


function main() {
    // Create a graph given in the above diagram
    // var g = new MYAPP.GraphApi.Graph();

    // g.addEdge(0, 1);
    // g.addEdge(0, 2);
    // g.addEdge(1, 2);
    // g.addEdge(2, 0);
    // g.addEdge(2, 3);
    // g.addEdge(3, 3);

    // console.log("BFS");
    // g.bfs();

    // console.log("DFS");
    // g.dfs();

   var g = new MYAPP.GraphApi.Graph();
    var adjArr = [
        ['A', 'B', 'C'],
        ['B', 'C'],
        ['C', 'A', 'D'],
        ['D', 'D']
    ];
    
    g.init(adjArr);
    console.log("BFS");
    g.bfs();

    console.log("DFS");
    g.dfs();
}

main();
