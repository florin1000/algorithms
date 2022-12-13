/**
 * Given an array write a function that returns the first recurring character
 * ex: [2,5,1,2,3,4,5,6,3,5] // 2
 * ex: [2,1,1,1,1,1,1,1,1,4,4,,4,4,1,123,41,234,123] // 2
 * ex: [12,2,3,4] // undefined
 * */

//naive approach O(n^2)
const firstRecurringCharacter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined
}

// console.log(firstRecurringCharacter([2, 5, 5, 2, 5, 3])) // 2

function firstRecurringCharacter2(arr) {
    const map = {};
    for (const element of arr) {
        if (map[element]) {
            return element
        } else {
            map[element] = true;
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter2([2, 3, 5, 5, 2, 3]))// 2 O(n) - increasing the space complexity, e have a new variable
