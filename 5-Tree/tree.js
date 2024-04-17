class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode)
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    setRoot(rootNode) {
        if (!this.root) {
            this.root = rootNode;
        }
    }

    search(node, value) {
        if (!this.root) {
            return -1;
        }

        if (!node) {
            return null;
        }

        if (node.value === value) {
            return node;
        }

        for (const child of node.children) {
            const foundNode = this.search(child, value);
            if (foundNode) {
                return foundNode;
            }
        }
    }

    insert(pValue, nodeValue) {
        const newNode = new Node(nodeValue);
        const parentNode = this.search(this.root, pValue);
        if (parentNode) {
            parentNode.addChild(newNode);
        } else {
            return;
        }
    }

    dfs1(node = this.root, res = []) {
        if (!node) {
            return res;
        }
        res.push(node.value);

        for (const child of node.children) {
            this.dfs1(child, res);
        }
        return res;
    }

    dfs2() {
        const stack = [this.root];
        const res = [];
        while (stack.length) {
            const curr = stack.pop();
            res.push(curr.value);
            for (let child of curr.children) {
                stack.push(child);
            }
        }
        return res;
    }

    bfs() {
        const queue = [this.root];
        const res = [];
        while (queue.length) {
            const curr = queue.shift();
            res.push(curr.value);
            for (const child of curr.children) {
                queue.push(child);
            }
        }
        return res;
    }
}

const node1 = new Node(10);
const node2 = new Node(6);
const node3 = new Node(9);
const node4 = new Node(12);

node1.addChild(node2);
node1.addChild(node3);

const tree = new Tree();

tree.setRoot(node1);

tree.insert(6, 7);

console.log(tree);

console.log("dfs1: ", tree.dfs1());
console.log("dfs2: ", tree.dfs2());
console.log(tree.bfs());