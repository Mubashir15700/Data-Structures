class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    insert(index, value) {
        if (index < 0 || index > this.size()) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size()) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
            this.size++;
        }
    }

    removeFront() {
        if (!this.isEmpty()) {
            this.head = this.head.next;
            this.size--;
        }
    }

    removeEnd() {
        if (!this.isEmpty()) {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            curr.next = null;
            this.size--
        }
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size()) {
            return;
        }

        if (index === 0) {
            this.removeFront();
        } else if (index === this.size() - 1) {
            this.removeEnd();
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
            this.size--;
        }
    }

    removeValue(value) {
        if (!this.isEmpty()) {
            if (this.head.value === value) {
                this.removeFront();
            } else {
                let curr = this.head;
                while (curr.next && curr.next.value !== value) {
                    curr = curr.next;
                }
                if (curr.next) {
                    curr.next = curr.next.next;
                    this.size--;
                }
            }
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }

        if (this.head.value === value) {
            return 0;
        }

        let curr = this.head;
        let index = 0;

        while (curr.next && curr.next.value !== value) {
            curr = curr.next;
            index++;
        }

        if (curr.next) {
            return index;
        }

        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if (!this.isEmpty()) {
            let str = "";
            let curr = this.head;
            while (curr) {
                str += curr.value;
                if (curr.next) {
                    str += "->"
                }
                curr = curr.next;
            }
            return str;
        }
    }
}
