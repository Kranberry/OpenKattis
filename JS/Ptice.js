'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let AdrianSequence = [ "A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C" ];
let Adriancorrect = 0;
let BrunoSequence = [ "B", "A", "B", "C", "B", "A", "B", "C", "B", "A", "B", "C" ];
let Brunocorrect = 0;
let GoranSequence = [ "C", "C", "A", "A", "B", "B", "C", "C", "A", "A", "B", "B" ];
let Gorancorrect = 0;

let questionState;
let amountOfQuestions;
let answers;

function Input(state = 0){
    questionState = state;

    rl.question("", (answer) => {
        (questionState === 0) ? amountOfQuestions = Number(answer) : answers = answer;

        if(questionState === 1){
            let sequenceState = 0;
            for(let i = 0; i < amountOfQuestions; i++){
                if(sequenceState > 11){
                    sequenceState = 0;
                }
                (answers[i] === AdrianSequence[sequenceState]) ? Adriancorrect++ : Adriancorrect += 0;
                (answers[i] === BrunoSequence[sequenceState]) ? Brunocorrect++ : Brunocorrect += 0;
                (answers[i] === GoranSequence[sequenceState]) ? Gorancorrect++ : Gorancorrect += 0;
                
                sequenceState++;
            }
            
            let printNames = "";
            let highestScore = 0;
            if(Adriancorrect >= Brunocorrect && Adriancorrect >= Gorancorrect){
                printNames += "Adrian\n";
                highestScore = Adriancorrect;
            }
            
            if(Brunocorrect >= Adriancorrect && Brunocorrect >= Gorancorrect){
                printNames += "Bruno\n";
                highestScore = Brunocorrect;
            }
            
            if(Gorancorrect >= Adriancorrect && Gorancorrect >= Brunocorrect){
                printNames += "Goran\n";
                highestScore = Gorancorrect;
            }

            PrintOut(highestScore, printNames);
        }

        (questionState === 0) ? Input(1) : rl.close();
    });
}

Input();

function PrintOut(score, names) {
    console.log(score + "\n" + names);
}