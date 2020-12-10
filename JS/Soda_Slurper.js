'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs;

function Input(){
    rl.question("", (answer) => {
        inputs = answer.split(" ");
        let emptyBottles = Number(inputs[0]) + Number(inputs[1]);
        let bottlesForNew = Number(inputs[2]);
        let newBottles = 0;

        while(emptyBottles - bottlesForNew > -1){
            emptyBottles -= bottlesForNew;
            newBottles++;
            emptyBottles++;
        }

        PrintOut(newBottles);
        rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}