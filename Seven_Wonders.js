'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T = 0;
let C = 0;
let G = 0;
let points = 0;

function Input(){
    rl.question("", (answer) => {
        
        for(let i = 0; i < answer.length; i++){
            switch(answer[i]){
                case "T":
                    T++;
                    break;
                case "C":
                    C++;
                    break;
                case "G":
                    G++;
                    break;
            }
        }
        points += (Math.pow(T, 2) + Math.pow(C, 2) + Math.pow(G, 2));

        while(true){
            if(T > 0 && C > 0 && G > 0){
                points += 7;
                T--;
                C--;
                G--;
            }
            else{
                break;
            }
        }

        PrintOut(points);
        rl.close();
    });
}

Input();

function PrintOut(answer) {
    console.log(answer);
}