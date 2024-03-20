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
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjList) {
            console.log(vertex + "->" + [...this.adjList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjList[vertex1].delete(vertex2);
        this.adjList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjList[vertex]) {
            return;
        }
        for (let adjVertex of this.adjList[vertex]) {
            this.removeEdge(adjVertex, vertex);
        }
        delete this.adjList[vertex];
    }

    dfs(startVertex) {
        const stack = [startVertex];
        const res = [];
        const visited = {};
        while (stack.length) {
            const curr = stack.pop();
            res.push(curr);
            visited[curr] = true;
            this.adjList[curr].forEach(vertex => {
                if (!visited[vertex]) {
                    stack.push(vertex);
                }
            });
        }
        return res;
    }

    bfs(startVertex) {
        const queue = [startVertex];
        const res = [];
        const visited = {};
        while (queue.length) {
            const curr = queue.shift();
            res.push(curr);
            visited[curr] = true;
            this.adjList[curr].forEach(vertex => {
                if (!visited[vertex]) {
                    queue.push(vertex);
                }
            })
        }
        return res;
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log(graph);
console.log(graph.dfs("A"));
console.log(graph.bfs("A"));
