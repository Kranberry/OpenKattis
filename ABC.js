'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [ ];
let order;

let A, B, C;

// A < B < C

function Input(state = 0){

    rl.question("", (answer) => {
        (state === 0) ? inputs = answer.split(" ") : order = answer;

        if(state === 1){

            for(let i = 0; i < inputs.length; i++){
                inputs[i] = Number(inputs[i]);
            }

            // console.log(inputs)

            C = Math.max.apply(null, inputs);
            inputs.splice(inputs.findIndex(element => element == C), 1);
            B = Math.max.apply(null, inputs);
            inputs.splice(inputs.findIndex(element => element == B), 1);
            A = inputs[0];

            PrintOut(A, B, C, order);
        }
         
        (state === 1) ? rl.close() : Input(1);
    });
}

Input();

function PrintOut(a, b, c, orders) {
    let printOrder = "";

    for(let i = 0; i < orders.length; i++){
        if(orders[i] === "A"){
            printOrder += A + " ";
        }
        if(orders[i] === "B"){
            printOrder += B + " ";
        }
        if(orders[i] === "C"){
            printOrder += C + " ";
        }
    }

    console.log(printOrder);
}