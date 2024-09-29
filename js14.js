// *Functions and Scope:*
// *Write a function that calculates the factorial of a given number.


//* Factorial of 0 = 1
//* Factorial of 1 = 1


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    } else {
        let result = 1;
        for (i = 2; i <= num; i++) {
            result = result * i
        }
        return result
    }
};
let number = 4
console.log(`Factorial of ${number} is : ${factorial(number)}`)