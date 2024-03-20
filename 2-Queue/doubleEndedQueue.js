class DoubleEndedQueue {
    constructor() {
        this.items = [];
    }

    addFront(value) {
        this.items.unshift(value);
    }

    addEnd(value) {
        this.items.push(value);
    }

    removeFront() {
        this.items.shift();
    }

    removeEnd() {
        this.items.pop();
    }

    peekFront() {
        return this.items[0]
    }

    peekEnd() {
        return this.items[this.items.length - 1]
    }
}
