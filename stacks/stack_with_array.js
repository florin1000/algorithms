class Stack {
    constructor() {
        this.list = [];
    }

    peek() {
        return this.list[this.list.length - 1];
    }

    push(value) {
        this.list.push(value);
        return this;
    }

    pop() {
        this.list.pop()
        return this;
    }

    isEmpty() {
        return this.list.length === 0
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
