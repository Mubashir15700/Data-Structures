class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        if (!this.top) {
            console.log("Empty");
        } else {
            const popped = this.top;
            this.top = this.top.next;
            this.size--;
            return popped;
        }
    }

    peek() {
        if (!this.top) {
            return -1;
        }
        return this.top;
    }

    print() {
        let res = [];
        let curr = this.top;
        while (curr) {
            res.push(curr.value);
            curr = curr.next;
        }
        return res;
    }
}

const stack = new Stack();

console.log("stack: ", stack);
stack.push(6);
stack.push(3);
stack.push(8);
console.log("peek: ", stack.peek());
console.log("pop: ", stack.pop());
console.log("print: ", stack.print());
