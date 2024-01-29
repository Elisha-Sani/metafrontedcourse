//Random In Js
//Generate random number in JavaScript.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gameRandom(){
    console.log("Guess the random number");
    var random = Math.floor(Math.random() * 10) + 1;
    i = 1
        rl.question("Enter a Random Number: ", function(userInput){
            if (userInput == random)
            {
                console.log("You win")
            } else {
                console.log("You lose");
                console.log(random);
            }
            rl.close();   
        });
    }

gameRandom();