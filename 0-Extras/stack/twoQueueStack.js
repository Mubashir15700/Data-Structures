class TwoQueueStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(item) {
        this.queue2.push(item);
        while (this.queue1.length) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        return this.queue1.shift();
    }

    peek() {
        return this.queue1[0];
    }
}

const stack = new TwoQueueStack();

stack.push(5);
stack.push(2);
stack.push(7);

console.log("stack: ", stack);
console.log("peek: ", stack.peek());
console.log("pop: ", stack.pop());
