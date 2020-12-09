'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (answer) => {
    let intArray = answer.split(" ");
    let scientists = Number(intArray[0]) * Number(intArray[1]) - Number(intArray[0]) + 1;
    console.log(scientists);
    
    rl.close()
});