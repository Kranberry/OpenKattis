'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputState;
let contestants = [ ];
let inputs;
let contestant;
let isTrue = true;

function Input(state = 0){
    inputState = state;

    rl.question("", (answer) => {
        (inputState === 0) ? inputs = answer.split(" ") : contestant = answer;
        // console.log(inputState + " : " + inputs[0]);

        if(inputState == inputs[0]-1){
            // console.log("Got here yo!");
            PrintOut(Number(inputs[1]));
            isTrue = false;
        }
        else if(inputState > 0 && inputState < inputs[0]){
            contestants.push(contestant);
            // console.log(inputState);
        }

        if(isTrue){
            inputState++;
            Input(inputState);
        }
        else{
            rl.close();
        }
    });
}

Input();

function PrintOut(n) {
    console.log(n);
}