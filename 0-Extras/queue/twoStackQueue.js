class TwoStackQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(value) {
        this.inStack.push(value);
    }

    dequeue() {
        if (!this.outStack.length) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    peek() {
        if (!this.outStack.length) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }

        if (this.outStack.length) {
            return this.outStack[this.outStack.length - 1];
        }
        return undefined;
    }
}

const queue = new TwoStackQueue();

console.log("queue: ", queue);
queue.enqueue(6);
queue.enqueue(2);
queue.enqueue(5);
console.log("dequeue: ", queue.dequeue());
console.log("peek: ", queue.peek());
