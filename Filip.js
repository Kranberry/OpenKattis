'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (answer) => {
    let intArray = answer.split(" ");
    let a = intArray[0].split("").reverse().join("");
    let b = intArray[1].split("").reverse().join("");
    
    let result = Number(a) < Number(b) ? b : a;

    console.log(result);

    rl.close()
});