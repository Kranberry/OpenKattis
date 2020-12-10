'use strict';
const { sep } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (answer) => {
    // An array with splitted shit with a ;
    const userInputs = answer.split(";");

    let amountOfProblems = 0;

    for(let i = 0; i < userInputs.length; i++){
        let seperatedStuff = userInputs[i].split("-");

        seperatedStuff.forEach(element => {
            element = Number(element);
        });
        // seperatedStuff.sort();

        for(let j = 0; j < seperatedStuff.length; j++){
            if(Number(seperatedStuff[j])+1 === seperatedStuff[j+1]){
                seperatedStuff[j] = seperatedStuff[j+1];
                seperatedStuff.slice(j+1, 1);
            }
        }
        
        const highNum = seperatedStuff[1] === undefined ? Number(seperatedStuff[0]) + 1 : Number(seperatedStuff[1]) + 1;

        let dumb = highNum - seperatedStuff[0];
        // console.log(dumb);
        // dumb = dumb == NaN ? 1 : seperatedStuff[1] - seperatedStuff[0];

        for(let j = 0; j < dumb ; j++){
            amountOfProblems++;
        }
    }

    console.log(amountOfProblems);

    rl.close();
});