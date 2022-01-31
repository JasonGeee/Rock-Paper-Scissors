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

// Rock beats scissors
// Scissors beats paper
// Paper beats rock
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";

    // Player Win Conditions. Wrote all conditions in 1 if statement for simplicity
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock")) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        ++playerScore;
    } 
    // Computer Win Condition
    else if (playerSelection == computerSelection) {
        result = "Tie Round! Try again!";
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        ++computerScore;
    }

    if (playerScore == 5) {
        result = "Player wins all! Refresh Page to restart to zero.";
    } else if (computerScore == 5) {
        result = "Computer wins all! Refresh Page to restart to zero.";
    }

    document.querySelector('.result').textContent = result; // add messages on the result div to display on website.
    document.querySelector('.score').textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
}

let playerScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll('input'); //selects all inputs in HTML file

btn.forEach(button => { //forEach function creates a variable that goes through each btn value but called button for new element
    button.addEventListener('click', () => { //every click we go to playRound function
        playRound(button.value);
    });
});



