class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++
        return this;
    }

    pop() {
        if (this.length === 0) {
            return this;
        } else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }

        this.length--;
        return this;
    }

    isEmpty() {
        return this.top === null
    }
}

const myStack = new Stack();
myStack.push('Udemy')
myStack.push('Youtube')
myStack.push('Facebook')
myStack.push('google')
myStack.push('amazon')
console.log(JSON.stringify(myStack));
myStack.pop()
console.log(JSON.stringify(myStack))
