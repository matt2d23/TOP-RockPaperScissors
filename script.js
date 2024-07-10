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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    function playRound(humanChoice, computerChoice) {
        // human = rock
        if (humanChoice === 'Rock' && computerChoice === 'Rock') {
            console.log(`It's a tie! Your choice: ${humanChoice} Computer's choice: ${computerChoice}`)
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        } else if (humanChoice === 'Rock' && computerChoice ===  'Paper') {
            console.log(`You lose! The computer chose ${computerChoice} and you chose ${humanChoice}.`);
            computerScore++;
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}`);
            humanScore++;
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
    
        // human = paper
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}`);
            humanScore++;
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
            console.log(`It's a tie! Your choice: ${humanChoice} Computer's choice: ${computerChoice}`)
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            console.log(`You lose! The computer chose ${computerChoice} and you chose ${humanChoice}.`);
            computerScore++;
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);

        // human = scissors
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            console.log(`You lose! The computer chose ${computerChoice} and you chose ${humanChoice}.`);
            computerScore++;
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}`);
            humanScore++;
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors') {
            console.log(`It's a tie! Your choice: ${humanChoice} Computer's choice: ${computerChoice}`)
            console.log(`The current score is: You: ${humanScore} Computer: ${computerScore}`);
        // exception
        // code is unnecessary since the getHumanChoice function throws the same error anyway.
        // } else if (humanChoice === undefined) {
        //     throw new TypeError("Invalid value, please enter 'Rock', 'Paper', or 'Scissors'.");
        } else {
            console.log("Something went terribly wrong for you to get here!");
        }
    }
 
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`ROUND ${round}!`);
        playRound(humanSelection, computerSelection);
        round++;
    }
}

playGame();




