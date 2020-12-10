'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs;
let socks;
let washedSocks = [];
let machineCapacity;
let amountOfSocks;
let absoluteDifference;
let amountOfMachines = 0;

// amountOfSocks, machineCap, maxColorDiff

function Input(state = 0) {

    rl.question("", (answer) => {
        (state === 0) ? inputs = answer.split(" "): socks = answer.split(" ");

        if (state === 0) {
            amountOfSocks = Number(inputs[0]);
            machineCapacity = Number(inputs[1]);
            absoluteDifference = Number(inputs[2]);
        }

        if (state === 1) {

            for (let i = 0; i < socks.length; i++) {
                socks[i] = Number(socks[i]);
                washedSocks[i] = false;
            }

            socks.sort((a, b) => {
                return b - a;
            });

            let i = 0;
            // for(let i = 0; i < socks.length; i++)
            while (i < socks.length) {
                if (!washedSocks[i]) {
                    amountOfMachines++;

                    let j = i;
                    // for(let j = i; j < socks.length; j++)
                    while (j < socks.length) {
                        if (socks[i] - socks[j] <= absoluteDifference) {
                            washedSocks[j] = true;
                            amountOfSocks++;

                            if (amountOfSocks === machineCapacity) {
                                amountOfSocks = 0;
                                break;
                            }
                        }
                        j++;
                    }
                }
                i++;
            }

            console.log(amountOfMachines);
        }

        (state === 1) ? rl.close(): Input(++state);
    });
}

Input();