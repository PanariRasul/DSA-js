//* String Manipulation:*:
//* Write a function that takes a string and returns the reversed version of it.

let str = "Hello World";

function reverseStr(str) {
    return (str.split("").reverse("").join(""));
}

console.log(reverseStr(str))