'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (answer) => {
    SencondInput(Number(answer));
});

let temps;
function SencondInput(AmountOfTemps){
    rl.question("", (answer) => {
        temps = answer.split(" ");

        for(let i = 0; i < AmountOfTemps; i++){
            temps[i] = Number(temps[i]);
        }

        for(let i = 0; i < temps.length; i++){
            if(typeof temps[i] === 'string'){
                temps = temps.slice(0, i);
            }
        }

        PrintOut();
        rl.close();
    });
    return;
}

let amountOfNegatives = 0;
function PrintOut(){
    for(let i = 0; i < temps.length; i++){
        if(temps[i] < 0){
            amountOfNegatives++;
        }
    }

    console.log(amountOfNegatives);
}