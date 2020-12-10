'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let AdrianSequence = [ "A", "B", "C" ];
let Adriancorrect = 0:
let BrunoSequence = [ "B", "A", "B", "C" ];
let Brunocorrect = 0:
let GoranSequence = [ "C", "C", "A", "A", "B", "B" ];
let Gorancorrect = 0:

let questionState;
let amountOfQuestions;
let answers;

function Input(state = 0){
    questionState = state;

    rl.question("", (answer) => {
        (questionState === 0) ? amountOfQuestions = Number(answer) : answers = answer;

        if(questionState === 1){
            
        }

        PrintOut(romanPaces);
        (questionState === 0) ? Input(1) : rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}