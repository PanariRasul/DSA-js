// *Conditional:*:
// Write a Function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.


function numberCheck(num) {
    if (num % 2 === 0) {
        return "Even Number"
    } else {
        return "Odd Number"
    }
}

console.log(numberCheck(1.99999999999999999999999999999999999999))