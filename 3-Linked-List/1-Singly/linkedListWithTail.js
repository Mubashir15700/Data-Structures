class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    removeFront() {
        if (this.size === 0) {
            console.log("empty");
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

    removeEnd() {
        if (this.size === 0) {
            console.log("empty");
        } else {
            if (this.size === 1) {
                this.head = this.tail = null;
            } else {
                let curr = this.head;
                while (curr.next && curr.next !== this.tail) {
                    curr = curr.next;
                }
                curr.next = null;
                this.tail = curr;
                this.size--;
            }
        }
    }
}
