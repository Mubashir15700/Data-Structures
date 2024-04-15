class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjList[vertex1].add(vertex2);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1].delete(vertex2);
        }
    }

    removeVertex(vertex) {
        if (this.adjList[vertex]) {
            for (let adjVertex in this.adjList[vertex]) {
                this.removeEdge(vertex, adjVertex);
            }
            delete this.adjList[vertex];
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

graph.removeVertex("C");

console.log("graph: ", graph);
