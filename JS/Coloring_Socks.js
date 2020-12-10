'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs;
let socks;
let numberOfMachines = 0;
let machineCapacity;
let amountOfSocks;
let absoluteDifference;
let amountOfMachines = 0;

// amountOfSocks, machineCap, maxColorDiff

function Input(state = 0){

    rl.question("", (answer) => {
        (state === 0) ? inputs = answer.split(" ") : socks = answer.split(" ");

        amountOfSocks = Number(inputs[0]);
        machineCapacity = Number(inputs[1]);
        absoluteDifference = Number(inputs[2]);

        if(state === 1){

            for(let i = 0; i < socks.length; i++){
                socks[i] = Number(socks[i]);
            }

            // if( socks.length > machineCapacity ){
            //     amountOfMachines = 1;
            // }

            socks.sort((a, b) => {
                return a - b;
            });
            // console.log(socks);
            socks.reverse();
            // console.log(socks);

            for(let i = 0; i < socks.length; i++)
            {
                // i = the sock I want to check against the next sock
                // If the sock is dirty. We need a new washing machine
                if(socks[i] !== true)
                {
                    amountOfMachines++;
                    let socksInMachine = 0;

                    // j = the sock I want to check against
                    for(let j = i; j < socks.length; j++)
                    {
                        if(socks[i] - socks[j] <= absoluteDifference && socks[i] !== true && socks[j] !== true && socks[j] != undefined)
                        {
                            // console.log("i " + socks[i]);
                            // console.log("j " + socks[j]);
                            // console.log(socks[i] - socks[j] + " :ASD:ASD");
                            socksInMachine++;
                            socks[j] = true;

                            if(socksInMachine === machineCapacity)
                            {
                                // console.log("fdfgdg");
                                socksInMachine = 0;
                                break;
                            }
                        }
                        else
                        {
                            break;
                        }
                    }
                    
                }
            }

            PrintOut(amountOfMachines);
        }

        (state === 1) ? rl.close() : Input(++state);
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}