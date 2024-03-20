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

    append(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    print() {
        if (!this.head) {
            return;
        }

        let str = "";
        let curr = this.head;

        do {
            str += curr.value;
            curr = curr.next;
        } while (curr !== this.head);

        return str;
    }
}
