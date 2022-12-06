/**
 * given 2 sorted arrays, merge them into  new sorted one
 * skip the input validation
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

    // return new Array(max).fill(null)
    //     .map((elem, i) => arr1[i] === i ? i : arr2[i] === i ? i : null)
    //     .filter(elem => !!elem);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])) // [0,3,4,4,6,30,31] // O( m + n)

