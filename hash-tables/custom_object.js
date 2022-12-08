/**
 * Hash table for the purpose of learning in javascript(aka as object)
 * */
class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // this.data = [];
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for (let x = 0; x < this.data.length; x++) {
            if (this.data[x]) {
                keys.push(this.data[x][0][0])
            }
        }
        return keys;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('apples', 54)
myHashTable.set('oranges', 2)
console.log(myHashTable)
console.log(myHashTable.keys())
