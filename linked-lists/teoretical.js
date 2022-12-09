class Node {
    constructor(value, nextValue = null) {
        this.value = value;
        this.next = nextValue;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        //todo check if this is the right way of doing things
        this.head = new Node(value, this.head);
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        // validate index ->  should be smaller than the length the list length -> than will just append to the end
        if (index < -this.length) {
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
        return this;
    }

    traverseToIndex(position) {
        let counter = 0
        let currentNode = this.head;
        while (counter !== position) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.prepend(9)
myLinkedList.prepend(8)
// console.log(JSON.stringify(myLinkedList.head))
myLinkedList.insert(3, 100);
console.log(JSON.stringify(myLinkedList.head));
console.log(JSON.stringify(myLinkedList.tail));
//8->9->10->11->12
