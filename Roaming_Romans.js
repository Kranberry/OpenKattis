'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let romanMiles = 4854;
let modernMiles = 5280;

// 1 roman miles = 1000 paces
// 1 modern miles = 1000 * ( modernMiles / romanMiles ) roman miles

function Input(){
    rl.question("", (answer) => {
        let miles = Number(answer);
        let romanPaces = Math.round((1000 * miles) * ((modernMiles * miles) / (romanMiles * miles)));

        PrintOut(romanPaces);
        rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}