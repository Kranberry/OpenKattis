'use strict';
const readline = require("readline");

/*
    inputs:  L, D, X
    Min N, L <= N <= D. Digits of N has the sum of X
    Max M, L <= N <= D. Digits of M has the sum of X

    outputs: N
    outputs: M
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l, d, x;
let min, max;

rl.question("", (answer) => {
    l = Number(answer);
    D();
});

function D() {
    rl.question("", (answer) => {
        d = Number(answer);
        X();
    });
}

function X() {
    rl.question("", (answer) => {
        x = Number(answer);

        // Find the minimum value
        for( let i = l; i <= d; i++ ){
            let tempOne;
            let temp = 0;

            for(let j = 0; j < String(i).length; j++){
                tempOne = i;
                temp += Number(String(i)[j]);
                // console.log(temp);
            }

            if(temp === x){
                min = tempOne;
                break;
            }
        }

        // Find the maximum value
        for( let i = d; i >= l; i-- ){
            let tempOne;
            let temp = 0;

            for(let j = 0; j < String(i).length; j++){
                tempOne = i;
                temp += Number(String(i)[j]);
            }

            if(temp === x){
                max = tempOne;
                break;
            }
        }

        PrintOut();
        rl.close()
        return;
    });
}

function PrintOut() {
    console.log(min);
    console.log(max);
}