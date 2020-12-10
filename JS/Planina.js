'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (answer) => {
    
    let iteration = Number(answer);
    let x = 2;
    let result;

    while(iteration--){
        x += x - 1;
    }

    result = (x * x);

    console.log(result);

    rl.close()
});