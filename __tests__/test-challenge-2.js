// const assignment = require('../src/assignment.js');

// const { countEvenNumbers } = assignment;
// const maybe = countEvenNumbers === undefined ? test.skip : test;

// maybe(
//     'Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers',
//     () => {
const numbers = [
    17, 0, 67, 41, 49, 21, 1, 86, 76, 2, 54, 14, 93, 84, 14, 77, 35, 7, 29, 64
];
//         expect(countEvenNumbers(numbers)).toBe(9);
//     }
// );

let evenNumbers = [];

function countEvenNumbers(a, b) {
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    console.log(b.length);
}

countEvenNumbers(numbers, evenNumbers);
