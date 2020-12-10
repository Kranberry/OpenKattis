'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs;

function Input(state = 0){

    rl.question("", (answer) => {
        (state === 0) ? inputs = answer.slice(" ") : // ;
        

        (state === 1) ? rl.close() : Input(++state);
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}