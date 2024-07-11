'use strict'

function getComputerChoice() {
    let random = Math.random();
    let choice = '';
    if (random <= 0.33) {
        return choice = 'Rock';
    } else if (random > 0.33 && random <= 0.66) {
        return choice = 'Scissors';
    } else if (random > 0.66) {
        return choice = 'Paper';
    } else {
        return choice = 'Something went terribly wrong...';
    }
};

function getHumanChoice() {
    let ask = prompt("Enter one of the 3: 'Rock', 'Paper', 'Scissors' ");
    let choice = '';

    try {
        if (ask.toUpperCase() === 'ROCK') {
            return choice = 'Rock';
        } else if (ask.toUpperCase() === 'PAPER') {
            return choice = 'Paper';
        } else if (ask.toUpperCase() === 'SCISSORS') {
            return choice = 'Scissors';
        } else {
            return;
        }
    // error is caught if the prompt value is anything other than the 3 required options, including other text or undefined.
    } catch (e) {
        throw new TypeError("Invalid value, please enter 'Rock', 'Paper', or 'Scissors'.");
    }
    
};

let btn = document.querySelectorAll(".btn");
let content = document.querySelector(".results");
let result = document.createElement("p");
let score = document.createElement("p");
content.appendChild(result);
content.appendChild(score);
let humanScore = 0;
let computerScore = 0;
let playAgain = document.createElement("button");

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (humanScore !== 5 && computerScore !== 5) {
            playGame()(e.target.id, getComputerChoice());
        } else if (humanScore === 5) {
            result.textContent = 'You win! :)';
            score.textContent = ''
            content.appendChild(playAgain);
            playAgain.textContent = 'Play Again?'
            playAgain.addEventListener("click", () => {
                result.textContent = '';
                humanScore = 0;
                computerScore = 0;
                playAgain.remove();
            })
        } else if (computerScore === 5) {
            result.textContent = 'You lose! :(';
            score.textContent = ''
            content.appendChild(playAgain);
            playAgain.textContent = 'Play Again?'
            playAgain.addEventListener("click", () => {
                result.textContent = '';
                humanScore = 0;
                computerScore = 0;
                playAgain.remove();
            })
        }
        
    })
})


// the game
function playGame() {
    return function playRound(humanChoice, computerChoice) {
            // human = rock
            if (humanChoice === 'Rock' && computerChoice === 'Rock') {
                result.textContent = `It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}.`
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}.`;
            } else if (humanChoice === 'Rock' && computerChoice ===  'Paper') {
                result.textContent = `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}`;
                computerScore++;
            } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
                result.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}`;
                humanScore++;

            // human = paper
            } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
                result.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}`;
                humanScore++;
            } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
                result.textContent = `It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}.`
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}.`;
            } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
                result.textContent = `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}`;
                computerScore++;

            // human = scissors
            } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
                result.textContent = `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}`;
                computerScore++;
            } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
                result.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}`;
                humanScore++;
            } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors') {
                result.textContent = `It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}.`
                score.textContent = ` The current score is: You: ${humanScore} Computer: ${computerScore}.`;
            } else {
                console.log("Something went terribly wrong for you to get here!");
            }
        }
}




