'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let amountOfInputs = 10;
let atInput = 0;
let inputs = [ ];
let modulos = [ ];

function Input(){
    rl.question("", (answer) => {
        atInput++;
        inputs.push(Number(answer));

        if(atInput < amountOfInputs){
            Input();
        }
        else{
            PrintOut();
            rl.close()
        }
    });
}

Input();

function PrintOut() {
    
    for(let i = 0; i < inputs.length; i++){
        if(!modulos.includes(inputs[i] % 42)){
            modulos.push(inputs[i] % 42);
        }
    }

    console.log(modulos.length);
}