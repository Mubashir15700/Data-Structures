class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return
        }
        if (root.value === value) {
            return root;
        }
        if (value < root.value) {
            this.search(root.left, value);
        } else {
            this.search(root.right, value);
        }
    }

    min(root = this.root) {
        if (!root.left) {
            return root;
        }
        return this.min(root.left);
    }

    max(root = this.root) {
        if (!root.right) {
            return root;
        }
        return this.max(root.right);
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(root = this.root) {
        const queue = [root];
        const res = [];
        while (queue.length) {
            const curr = queue.shift();
            res.push(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        return res;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            }

            if (!root.right) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, value);

            return root;
        }
    }
}

const tree = new Tree();

tree.insert(5);
tree.insert(3);
tree.insert(89);
tree.insert(34);
tree.insert(7);
tree.insert(2);

console.log(tree);
console.log(tree.levelOrder());
