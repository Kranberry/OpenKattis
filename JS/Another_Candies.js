'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs;

let testCases;
let numberOfChildren;
let candiesBrought;

function Input(state = 0){

    rl.question("", (answer) => {
        if(state === 0){
            testCases == Number(answer);
        }
        

        if(state === testCases){
            PrintOut();
            rl.close();
        }
        else{
            Input(++state);
        }
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}