/* Step 1: Create a function that generates a random answer to play the game and return that random answer */

/* 
Step 2: create a function or a regular prompt that will get user input from a prompt window. Convert that string into all lowercase to validate all inputs 
Example: ROCK, RocK and rock will all be accepted

FOR THIS PROJECT, WE WILL IGNORE IF USER ENTERS INVALID INPUTS.
Later on, I will be creating button that will only have rock, paper, or scissors. So invalid input will be impossible.
*/

/*
Step 3: Create a function that will create the game and check both user selection and computer selection.
        Also create a counter for player score and computer score.

Check and see who wins.
If player is rock and computer is scissors, player wins. playerScore + 1
If player is scissors and computer is paper, player wins. playerScore + 1
If player is paper and computer is rock, player wins. playerScore + 1

Only other condition left if the first 3 dont meet.
Else computer wins. computerScore + 1

Figure out a way to keep looping through this function

*/


// Function for the computer to play with user
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; //Generates random # from 1 to 3

    if (randomNumber == 1) {
        return "rock"
    }
    else if (randomNumber == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

//Function for getting user input
function playerChoice() {
    let selection = prompt("Choose: Rock, Paper, or Scissors?");
    let newSelection = selection.toLowerCase();
    return newSelection
}

// Rock beats scissors
// Scissors beats paper
// Paper beats rock
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors");
        return ++playerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper");
        return ++playerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
        return ++playerScore;
    }
    else if (playerSelection == computerSelection) {
        console.log("It's a tie");
        return playerScore;
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return ++computerScore;
    }
}


function game() {
    do {
        playRound(playerChoice(), computerPlay());
        //playRound();
        console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}.`);

    } while (playerScore < 5 && computerScore < 5);

    if (playerScore > computerScore) {
        return "Player wins all!";
    } else if (playerScore < computerScore) {
        return "Computer wins all!";
    } else {
        return "Tie game ):";
    }
}

let playerScore = 0;
let computerScore = 0;
let userChoice;
//console.log(game());

