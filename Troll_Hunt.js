'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// knights / minimal per group = groups
// bridges / groups = amount of days
// If bridges are uneven, remove 1 from days

// inputs[bridges, knights, minimal per group]
let inputs;
let groups;
let days;

function Input(){
    rl.question("", (answer) => {
        inputs = answer.split(" ");
        let bridges = inputs[0];
        bridges--;
        groups = Math.floor((Number(inputs[1]) / Number(inputs[2])));
        // console.log("Modulu " + inputs[0] % groups);
        // console.log("Division " + inputs[0] / groups);
        days = Math.ceil(bridges / groups);

        PrintOut(days);
        rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}