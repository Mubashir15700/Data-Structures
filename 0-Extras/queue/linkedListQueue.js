class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode
        }
        this.size++;
    }

    dequeue() {
        if (this.size === 0) {
            console.log("Empty");
        } else {
            const dequeued = this.front;
            if (this.size === 1) {
                this.front = this.rear = null;
            } else {
                this.front = this.front.next;
            }
            this.size--;
            return dequeued;
        }
    }

    peek() {
        if (this.size === 0) {
            return null;
        }
        return this.front;
    }
}

const queue = new Queue();

console.log("queue: ", queue);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(3);
console.log("peek: ", queue.peek());
console.log("dequeue: ", queue.dequeue());
