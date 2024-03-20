class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    print() {
        let str = "";
        for (let i = 0; i < this.getSize(); i++) {
            str += this.items[i] + " ";
        }
        return str;
    }

    reverse() {
        let temp = [];
        while (!this.isEmpty()) {
            temp.push(this.items.pop());
        }
        while (temp.length) {
            this.push(temp.pop())
        }
        return this.items;
    }

    removeMid() {
        let midIndex = Math.floor(this.getSize() / 2);

        let temp = [];

        for (let i = this.getSize() - 1; i >= midIndex; i--) {
            if (i === midIndex) {
                this.pop();
            } else {
                const popped = this.pop();
                temp.push(popped);
            }
        }

        while (temp.length) {
            this.push(temp.pop())
        }
    }
}

const stack = new Stack();

stack.push(4);
stack.push(3);
stack.push(6);
stack.push(5);
stack.push(8);

console.log("Peak: ", stack.peek());
console.log("Print: ", stack.print());
stack.removeMid();
console.log(stack.print());
console.log(stack.reverse());
