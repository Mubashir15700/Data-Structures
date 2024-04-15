class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        let added = false;
        const element = { value, priority };
        for (let i = 0; i < this.queue.length; i++) {
            if (element.priority < this.queue[i].priority) {
                this.queue.splice(i, 0, element);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(element);
        }
    }

    dequeue() {
        if (!this.queue.length) {
            console.log("Empty");
        } else {
            return this.queue.shift();
        }
    }
}

const queue = new PriorityQueue();

console.log("queue: ", queue);
queue.enqueue("A", 2);
queue.enqueue("B", 1);
queue.enqueue("C", 3);
console.log(queue.dequeue());
