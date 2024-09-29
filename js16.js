// *Higher-Order Functions:*
//*  Write a function that takes an array of numbers and returns a new array with only the even numbers.


let numbers = [1, 2, 3, 4, 5, 9, 6, 8, 21, 51, 10, 22, 52, 32, 78];


function getEvenNum(arr) {
    return arr.filter(num => num % 2 === 0);
};

let newArray = getEvenNum(numbers);

console.log(`Given Array: ${numbers}`);

console.log(`New New Even Numbers Array: ${newArray}`);