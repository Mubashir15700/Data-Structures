class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    balancedParanthesis(str) {
        let newStack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
                newStack.push(str[i]);
            } else {
                const curr = newStack.pop();
                if ((curr === "(" && str[i] === ")") ||
                    (curr === "{" && str[i] === "}") ||
                    (curr === "[" && str[i] === "]")
                ) {
                    continue;
                } else {
                    return false;
                }
            }
        }

        if (newStack.length) {
            return false;
        }
        return true;
    }

    evaluatePostfix(str) {
        let newStack = [];
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < str.length; i++) {
            if (nums.includes(Number(str[i]))) {
                newStack.push(Number(str[i]));
            } else {
                switch (str[i]) {
                    case "+": {
                        newStack.push(newStack.pop() + newStack.pop());
                        break;
                    };
                    case "-": {
                        newStack.push(newStack.pop() - newStack.pop());
                        break;
                    };
                    case "*": {
                        newStack.push(newStack.pop() * newStack.pop());
                        break;
                    };
                    case "/": {
                        newStack.push(newStack.pop() / newStack.pop());
                        break;
                    };
                    default: {
                        break;
                    }
                }
            }
        }

        return newStack.pop();
    }

    reverseStack() {
        const newStack = []
        return this.reverse(newStack);
    }

    reverse(newStack) {
        if (this.stack.length === 0) {
            return newStack;
        }

        newStack.push(this.stack.pop());
        return this.reverse(newStack);
    }

    nextGreater() {
        let res = [];
        let myStack = [];

        for (let i = this.stack.length - 1; i >= 0; i--) {
            while (myStack.length && this.stack[i] >= myStack[myStack.length - 1]) {
                myStack.pop();
            }

            if (!myStack.length) {
                res.push(-1);
            } else {
                res.push(myStack[myStack.length - 1]);
            }

            myStack.push(this.stack[i]);
        }

        return res.reverse();
    }

    merge() {
        const stack1 = [1, 3, 5, 7, 9];
        const stack2 = [2, 4, 6, 8, 0];

        const temp = [];

        while (stack2.length) {
            temp.push(stack2.pop());
        }

        while (temp.length) {
            stack1.push(temp.pop());
        }

        return stack1;
    }
}

const myStack = new Stack();
myStack.push(6);
myStack.push(3);
myStack.push(9);
myStack.push(7);
myStack.push(2);

console.log("stack: ", myStack);
console.log("pop: ", myStack.pop());
console.log("peek: ", myStack.peek());
console.log("balanced paranthesis: ", myStack.balancedParanthesis("[{]}"));
console.log("evaluate postfix: ", myStack.evaluatePostfix("15+5"));
console.log("next greater: ", myStack.nextGreater());
console.log("reverse stack: ", myStack.reverseStack());
console.log("merge: ", myStack.merge());
