'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cups = [ 1, 0, 0 ];
let resultIndex = 1;

rl.question("", (answer) => {
    // Shuffle it all around
    for(let i = 0; i < answer.length; i++){
        let temp = 0;

        if(answer[i] === "A"){
            temp = cups[0];
            cups[0] = cups[1];
            cups[1] = temp;
        }else if(answer[i] === "B"){
            temp = cups[1];
            cups[1] = cups[2];
            cups[2] = temp;
        }else if(answer[i] === "C"){
            temp = cups[2];
            cups[2] = cups[0];
            cups[0] = temp;
        }
    }

    // Find the slot where the ball is
    resultIndex = cups.findIndex(element => element === 1) + 1;

    PrintOut();
    rl.close()
});

function PrintOut() {
    // console.log(cups);
    console.log(resultIndex);
}