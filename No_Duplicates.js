'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [ ];

function Input(){
    rl.question("", (answer) => {
        inputs = answer.split(" ");

        for(let i = 0; i < inputs.length; i++){
            for(let j = i+1; j < inputs.length; j++){
                if(inputs[i] === inputs[j]){
                    PrintOut("no");
                    rl.close();
                    return;
                }
            }
        }

        PrintOut("yes");
        rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}