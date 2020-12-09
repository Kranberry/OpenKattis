'use strict';
const readline = require("readline");

/*
    X, Y, N
    N => The amount you want to go for
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x, y, n;

rl.question("", (answer) => {
    let intArray = answer.split(" ");
    x = intArray[0];
    y = intArray[1];
    n = intArray[2];

    for (let i = 1; i <= n; i++) {
        if (i % x === 0 && i % y === 0) {
            console.log("FizzBuzz");
        } 
        else if (i % x === 0) {
            console.log("Fizz");
        }
        else if (i % y === 0) {
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }

    rl.close();
});