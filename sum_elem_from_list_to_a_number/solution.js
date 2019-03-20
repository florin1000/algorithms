/**
 * I assumed that arrays have positive integers and the sum is positive integer
 * */

const solution1 = (arr1, arr2, sum) => {
    /**
     * this solution is clean and readable but is the most inefficient (O(n*m))
     * */

    let output = [];
    arr1.map(el1 => arr2.map(el2 => el1 + el2 === sum ? output.push([el1, el2]) : null));
    return output;
};
// console.log(solution1([1, 2, 3, 5, 0], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));

const solution2 = (arr1, arr2, sum) => {

    /**
     * This solution it is faster than the previous when we have large arrays with a lot of elements bigger
     * than the sum because we are checking only some of
     * the elements of the arrays and not all of them but, we are still doing some expensive computations at the
     * beginning with sort and filter
     * */

    let arr1_sort_filter = arr1.filter(el => el <= sum).sort((a, b) => a - b);
    let arr2_sort_filter = arr2.filter(el => el <= sum).sort((a, b) => a - b);
    let output = [];

    for (let i = 0; i < arr1_sort_filter.length; i++) {
        for (let j = 0; j < arr2_sort_filter.length; j++) {
            if (arr1_sort_filter[i] + arr2_sort_filter[j] === sum) {
                output.push([arr1_sort_filter[i], arr2_sort_filter[j]]);

                /**
                 * we don't stop our search here because we may have elements with the
                 * same value (but with different indices), and this is why is a must the next step
                 * in which we will stop our search when the sum of the 2 values is bigger then the sum parameter
                 * */

            }
            if (arr1_sort_filter[i] + arr2_sort_filter[j] > sum && j !== arr2_sort_filter.length - 1) {

                /**
                 * 1)we stop checking the next values in the next array since the array is sorted ascending
                 * and the sum of actual values is bigger than the sum (we will only get bigger numbers)
                 * 2)we are also check if we are already at the last element because we will have double increment
                 * and we will skip the next element in the first array
                 * */

                i++;
            }
        }
    }
    return output;

};
// console.log(solution2([1, 2, 3, 5], [3, 5, 2, 1], 5));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));

const solution3 = (arr1, arr2, sum) => {

    /**
     * This solution may come in handy when we have one array with one type of numbers(even/odd) and the other array has
     * the other type (even/odd) and a certain type (even/odd) fo the sum param
     * but, still we are doing a filter(map) at the beginning which is performance consuming
     * ex: arr1 = [0,2,1,3,....20 000 odds...], arr2 = [4,6,8], sum = 10;
     * but it can be more performance consuming then the first method O(m+n+m*n)
     * */

    let output = [];
    let arr1_even = [];
    let arr1_odd = [];
    let arr2_even = [];
    let arr2_odd = [];
    arr1.map(el => el % 2 === 0 ? arr1_even.push(el) : arr1_odd.push(el));
    arr2.map(el => el % 2 === 0 ? arr2_even.push(el) : arr2_odd.push(el));

    if (sum % 2 === 0) {
        for (let i = 0; i < arr1_even.length; i++) {
            for (let j = 0; j < arr2_even.length; j++) {
                if (arr1_even[i] + arr2_even[j] === sum) {
                    output.push([arr1_even[i], arr2_even[j]])
                }
            }
        }

        for (let i = 0; i < arr1_odd.length; i++) {
            for (let j = 0; j < arr2_odd.length; j++) {
                if (arr1_odd[i] + arr2_odd[j] === sum) {
                    output.push([arr1_odd[i], arr2_odd[j]])
                }
            }
        }

    } else {
        for (let i = 0; i < arr1_even.length; i++) {
            for (let j = 0; j < arr2_odd.length; j++) {
                if (arr1_even[i] + arr2_odd[j] === sum) {
                    output.push([arr1_even[i], arr2_odd[j]])
                }
            }
        }

        for (let i = 0; i < arr1_odd.length; i++) {
            for (let j = 0; j < arr2_even.length; j++) {
                if (arr1_odd[i] + arr2_even[j] === sum) {
                    output.push([arr1_odd[i], arr2_even[j]])
                }
            }
        }
    }

    return output;
};

// console.log(solution3([1, 2, 3, 3, 3, 3, 5, 0], [3, 5, 2, 1], 4));
// console.log(solution3([1, 2, 3, 3, 3, 3, 5, 0], [3, 5, 2, 1], 5));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));

const solution4 = (arr1, arr2, sum) => {

    /**
     * In this solution we are searching for each element in the first array the difference in the second and the
     * speed of this solution is correlated with the speed of 'includes/indexOf method'
     * * */

    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr2Buffer = [...arr2];
        while (arr2Buffer.includes(sum - arr1[i])) {
            output.push([arr1[i], sum - arr1[i]]);
            arr2Buffer.splice(arr2Buffer.indexOf(sum - arr1[i]), 1);
        }
    }
    return output;
};
// console.log(solution4([1, 2, 3, 3, 5, 0], [3, 5, 2, 1], 4));
// console.log(solution1([], [3, 5, 2, 1, 0, 6, 6, 6, 7], 6));
// console.log(solution1([1, 2, 3, 2, 1], [3, 5, 2, 1, 0, 8, 12, 7], 6));