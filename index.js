let computerScore = 0;
let userScore = 0;
let tieTotal = 0;
const winningDisplay = document.getElementById("display_who_wins");
const scoreDisplay = document.getElementById("current_score");
winningDisplay.innerHTML = "Select: Rock, Paper, Scissors";
displayScore();

const rock = document.getElementById("rock");
rock.addEventListener("click", playGame);

const paper = document.getElementById("paper");
paper.addEventListener("click", playGame);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", playGame);

// And the game logic is over here.
function playGame(element) {
    const computerChoice = getComputerChoice();
    const userChoice = element.target.id;
    const winner = getWinner(computerChoice, userChoice);
    displayWinner(winner, computerChoice);
    displayScore();
}

//This is the routine where the computer makes it's choice.
function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3));
    const computerOptions = ["rock", "Paper", "scissors"];
    return computerOptions[randomNumber];
}

function getWinner(computerChoice, userChoice) {
    if (userChoice === computerChoice) return 'tie';

    switch (userChoice) {
        case "rock":
            return computerChoice === "paper" ? "computer" : "user";
        case "paper":
            return computerChoice === "scissors" ? "computer" : "user";
        case "scissors":
            return computerChoice === "rock" ? "computer" : "user";
    }

}

function displayWinner(winner, computerChoice) {
    switch (winner) {
        case "tie":
            winningDisplay.innerHTML = "It's a tie!  No points scored.";
            tieTotal += 1;
            break;
        case "computer":
            winningDisplay.innerHTML = `You win!! Computer chose ${computerChoice}!`;
            userScore += 1;
            break;
        case "user":
            winningDisplay.innerHTML = `You lose!! Computer chose ${computerChoice}!`;
            computerScore += 1;
            break;
    }
}

function displayScore() {
    scoreDisplay.innerHTML = `User ${userScore} | Computer ${computerScore} | Ties ${tieTotal}`;
}