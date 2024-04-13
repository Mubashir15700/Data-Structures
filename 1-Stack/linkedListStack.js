class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            let popped = this.top;
            this.top = popped.next;
            this.size--;
            return popped;
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            return this.top;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            let curr = this.top;
            let str = "";
            while (curr) {
                str += curr.value;
                if (curr.next) {
                    str += " -> ";
                }
                curr = curr.next;
            }
            return str;
        }
    }
}

const stack = new LinkedListStack();

stack.push(6);
stack.push(4);
stack.push(9);
stack.push(7);
stack.push(2);

console.log(stack);

console.log(stack.peek());

console.log(stack.print());
