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
        this.adjList[vertex2].add(vertex1);
    }

    dfsIsCyclic(startVertex = "A") {
        const stack = [{ vertex: startVertex, parent: null }];
        const isVisited = {};
        const result = [];
        while (stack.length) {
            const { vertex, parent } = stack.pop();
            if (!isVisited[vertex]) {
                isVisited[vertex] = true;
                result.push(vertex);
                this.adjList[vertex].forEach(neighbor => {
                    if (!isVisited[neighbor]) {
                        stack.push({ vertex: neighbor, parent: vertex });
                    } else if (neighbor !== parent) {
                        console.log(`Cycle detected between ${vertex} and ${neighbor}`);
                    }
                })
            }
        }

        return result;
    }

}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

console.log("graph: ", graph);
console.log("dfs: ", graph.dfsIsCyclic());
