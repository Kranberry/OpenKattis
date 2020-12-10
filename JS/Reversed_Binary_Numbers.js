'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

function Reverse(str){
    // console.log(str);
    return str.toString().split("").reverse().join("");
}

function Input(){
    rl.question("", (answer) => {
        // console.log(answer);
        // Convert to base 2
        input = Number(answer).toString(2);
        // Reverse the binary
        input = Reverse(input);
        // parseInt(string, 10) // Convert string int in to base 10
        let result = parseInt(input, 2);
        console.log(result);

        rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}