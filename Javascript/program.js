
// Que 1 - Count duplicate elemnts from array

// const items = ["a", "b", "c", "d", "e", "a", "a", "d", "f", "a", "b", "c", "a"];


// const countDuplicates = (items) => {
//     const output = {};
//     items.forEach(element => {
//         output[element] = (output[element] || 0) + 1;
//     });
//     return output;
// }

// console.log(countDuplicates(items));

// Que 2 - reverse a string

// const input = 'I Love javascript';

// const reverseString = str => {
//     let arr = str.split(" ");
//     arr.reverse();
//     arr = arr.join(" ")
//     return arr;
// }

// console.log(reverseString(input));


// const reverseString2 = str => {
//     let arr = str.split(" ");
//     arr = arr.map(a => {
//         return a.split("").reverse().join("")
//     });
//     arr = arr.join(" ")
//     return arr;
// }

console.log(reverseString2(input))