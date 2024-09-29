// *Functions and Scope:*
//* Create a function that generates a random number between a given range


function genRandomNum(number) {
    let num = Math.floor(Math.random() * number) + 1;
    return num;
}

console.log(genRandomNum(4))