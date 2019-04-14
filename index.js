var inquirer = require('inquirer');
var Word = require('./word.js');

var wordArr = ['Polynisian', 'Uncontrollable',
                'Entrapment', 'Bumblebee',
                'Cartagena', 'Ozuna'];

var randomWord = '';
var displayValue = "";
var finalValue = '';
var leftToGuess;
var lives = 6

function newGame() {
    randomWord = "";
    var r = parseInt(Math.floor(Math.random() * (wordArr.length)));
    randomWord = wordArr[r];
    finalValue = new Word(randomWord);
    leftToGuess = finalValue.storedVal.length;
}

function gameOver() {
    {
        console.log("Game over.")
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Would you like to play again?"
        }]).then(function (response) {
            if (response.playAgain) {
                newGame()
                print()
                askToGuess();
            } else {
                console.log("Ok, see you around!")
            }
        })
    }
}

function display() {
    displayValue = finalValue.createWerdString()
    console.log(displayValue);
    finalValue.compare = displayValue;
}


function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalValue.checkChar(input)
                displayValue = finalValue.displayWord()

                if (finalValue.compare === displayValue) {
                    console.log("Nope, there is no", input, "in the word")
                    lives--
                    console.log("You have", lives, "guesse(s) remaining.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        askToGuess()
                    }
                   
                } else {
                    console.log("Good choice!")
                    leftToGuess--
                    print();
                    if (leftToGuess === 0) {

                        console.log("Great Job! Here's the next word:");
                        newGame()
                        print();
                        askToGuess();
                    } else {
                        askToGuess()
                    }
                }

            } else if (input.length === 0) {
                consoel.log("Please choose a letter.");
                askToGuess()
            } else {
                console.log("Pick one letter a a time please.")
                askToGuess()
            }


        } else {
            gameOver()
        }
    })
}

function print() {
    console.log("\n")
    console.log("******************************************")
    displayWord()
    console.log("\n*****************************************")
    console.log("\n")
};
newGame();
print();
askToGuess();