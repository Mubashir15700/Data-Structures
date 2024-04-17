class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(parent, node) {
        if (node.value <= parent.value) {
            if (!parent.left) {
                parent.left = node;
            } else {
                this.insertNode(parent.left, node);
            }
        } else {
            if (!parent.right) {
                parent.right = node;
            } else {
                this.insertNode(parent.right, node);
            }
        }
    }

    isValid(currNode = this.root, prevValue = null) {
        if (!currNode) {
            return true;
        }

        const isLeftValid = this.isValid(currNode.left, prevValue);

        if (!isLeftValid || (prevValue !== null && currNode.value <= prevValue)) {
            return false;
        }
        prevValue = currNode.value;
        return this.isValid(currNode.right, prevValue);
    }

    height(node = this.root) {
        if (!node) {
            return -1;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    getDepth(node = this.root, target = 7, depth = 0) {
        if (!node) {
            return -1;
        }

        if (node.value === target) {
            return depth;
        }

        const leftDepth = this.getDepth(node.left, target, depth + 1);
        if (leftDepth !== -1) {
            return leftDepth;
        }

        return this.getDepth(node.right, target, depth + 1);
    }

    isSimilar(root1, root2) {
        if (!root1 && !root2) {
            return true;
        }

        if (!root1 || !root2 || root1.value !== root2.value) {
            return false;
        }

        return (
            this.isSimilar(root1.left, root2.left) &&
            this.isSimilar(root1.right, root2.right)
        );
    }

    areStructuresSame(root1, root2) {
        if (!root1 && !root2) {
            return true;
        }

        if (!root1 || !root2) {
            return false;
        }

        return (
            this.areStructuresSame(root1.left, root2.left) &&
            this.areStructuresSame(root1.right, root2.right)
        );
    }
}

const bst = new BST();

bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(3);
bst.insert(9);

console.log("bst: ", bst);
console.log("level order: ", bst.levelOrder());
console.log("is valid: ", bst.isValid());
console.log("height: ", bst.height());
console.log("depth: ", bst.getDepth());
