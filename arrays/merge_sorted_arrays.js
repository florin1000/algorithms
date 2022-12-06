/**
 * given 2 sorted arrays, merge them into  new sorted one
 * skip the input validation(we make sure we have 2 arrays with at least2 elements inside)
 * */

const mergeSortedArrays = (arr1, arr2) => {
    const min = Math.min(arr1[0], arr2[0]);
    const max = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);
    const arrFinal = [];
    let j = 0; //counter for first arr
    let k = 0; // counter for second arr
    for (let i = min; i <= max; i++) {
        if (arr1[j] === i) {
            arrFinal.push(i);
            j++;
        }
        if (arr2[k] === i) {
            arrFinal.push(i);
            k++;
        }
    }
    return arrFinal;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])) // [0,3,4,4,6,30,31] // O(n)

const mergeSortedArrays2 = (arr1, arr2) => {
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    const arrFinal = [];
    let i = 1; //counter for first arr
    let j = 1; // counter for second arr
    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            arrFinal.push(arr1Item);
            arr1Item = arr1[i];
            i++
        } else {
            arrFinal.push(arr2Item);
            arr2Item = arr2[j];
            j++
        }
    }

    return arrFinal
}
console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30])) // [0,3,4,4,6,30,31] // O(n)

