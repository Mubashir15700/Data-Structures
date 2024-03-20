class CircularQueue {
    constructor(size) {
        this.items = new Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
        this.currentLength = 0;
        this.capacity = size;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    getSize() {
        return this.currentLength;
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("full");
        } else {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = value;
            if (this.front === -1) {
                this.front = this.rear;
            }
            this.currentLength++;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("empty");
        } else {
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength--;
            if (this.isEmpty()) {
                this.front = this.rear = -1;
            }
            return item;
        }
    }

    peek() {
        return this.items[this.front];
    }

    print() {
        if (this.isEmpty()) {
            console.log("empty");
        } else {
            let str = "";
            let i = this.front;
            while (true) {
                str += this.items[i] + " ";
                if (i === this.rear) {
                    break;
                }
                i = (i + 1) % this.capacity
            }
            return str;
        }
    }
}

const circularQueue = new CircularQueue(5);

console.log(circularQueue);
