const assignment = require('./assignment.js');

const { sumOfNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbers && typeof sumOfNumbers === 'function'){
    console.log(sumOfNumbers([ 68, -68, 27, 94, 72, -25, -51, 32, 10, 64, -94, 4, 34, -86, 90, 81, 20, -56,
    -91, -50]));
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([17, 0, 67, 41, 49, 21, 1, 86, 76, 2, 54, 14, 93, 84, 14, 77, 35, 7, 29, 64]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}