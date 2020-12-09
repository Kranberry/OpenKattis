'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let amountOfIntergers;
let numbers = [  ];

rl.question("", (answer) => {
    amountOfIntergers = Number(answer);
    
    Reverse();
});

let repeatedAmount = 0;

function Reverse(){
    // console.log(amountOfIntergers);

    rl.question("", (answer) => {
        numbers.push(Number(answer));
        repeatedAmount++;

        if(repeatedAmount === amountOfIntergers){
            PrintOut();
            rl.close();
            return;
        }
        Reverse()
    });
}

function PrintOut(){
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[numbers.length - 1 - i]);
    }
}