/**
 * Given a string as input add a function that will revert it
 * For the sake of simplicity skip input validation and assume you will always receive a string with 2 character minimum
 * Use the most efficient method(time and space complexity)
 * */

//Method 1
const stringReverse = (string) => [...string].reverse().join('') //Most readable
console.log(stringReverse('abcd')) //should return dcba
console.log(stringReverse('Hello world!')) //should return !dlrow olleH


const stringReverse2 = (string) => {
    const str = [];
    for (let i = string.length - 1; i >= 0; i--) {
        str.push(string[i]);
    }
    return str.join('')
}
console.log('   stringReverse2')
console.log(stringReverse2('abcd')) //should return dcba
console.log(stringReverse2('Hello world!')) //should return !dlrow olleH
const stringReverse3 = (string) => { //optimize the space complexity of the previous one
    const len = string.length;
    for (let i = len - 1; i >= 0; i--) {
        string += string[i];
    }
    return string.slice(len)
}
console.log('   stringReverse3')
console.log(stringReverse3('abcd')) //should return dcba
console.log(stringReverse3('Hello world!')) //should return !dlrow olleH

