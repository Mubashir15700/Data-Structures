class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFront() {
        if (this.size === 0) {
            return;
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }

    removeEnd() {
        if (this.size === 0) {
            return;
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    print() {
        if (this.size) {
            let curr = this.head;
            let str = "";
            while (curr) {
                str += curr.value;
                curr = curr.next;
            }
            return str;
        }
    }

    printReverse() {
        if (this.size) {
            let curr = this.tail;
            let str = "";
            while (curr) {
                str += curr.value + " ";
                curr = curr.prev;
            }
            return str;
        }
    }
}
