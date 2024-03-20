class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("underflow");
        } else {
            return this.items.shift();
        }
    }

    peek() {
        return this.items[0];
    }

    print() {
        let str = "";

        for (let i = 0; i < this.getSize() - 1; i++) {
            str += this.items[i];
        }

        return str;
    }
}

const queue = new Queue();
