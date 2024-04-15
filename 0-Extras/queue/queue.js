class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (!this.queue.length) {
            console.log("Empty");
        } else {
            return this.queue.shift();
        }
    }

    reverse() {
        let res = [];
        while (this.queue.length) {
            res.push(this.dequeue());
        }

        while (res.length) {
            this.enqueue(res.pop());
        }
    }

    recursiveReverse(newQueue = []) {
        if (!this.queue.length) {
            return newQueue;
        }

        newQueue.push(this.queue.pop());

        return this.recursiveReverse(newQueue);
    }

    merge() {
        const queue1 = [1, 3, 5, 7, 9];
        const queue2 = [2, 4, 6, 8, 0];

        while (queue2.length) {
            queue1.push(queue2.shift());
        }

        return queue1;
    }
}

const myQueue = new Queue();

myQueue.enqueue(2);
myQueue.enqueue(5);
myQueue.enqueue(6);

console.log("queue: ", myQueue);
// console.log("dequeue: ", myQueue.dequeue());
// console.log("reverse: ", myQueue.reverse());
console.log("recursive reverse: ", myQueue.recursiveReverse());
console.log("merge: ", myQueue.merge());