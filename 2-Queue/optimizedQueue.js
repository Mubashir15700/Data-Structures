class Queue {
    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    getSize() {
        return this.rear - this.front;
    }

    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            const item = this.queue[this.front];
            delete this.queue[this.front];
            this.front++;
            return item;
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            return this.queue[this.front];
        }
    }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(8);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(9);

console.log("queue: ", queue);
console.log("peek: ", queue.peek());
console.log("dequeue: ", queue.dequeue());
