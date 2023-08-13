const userSelections = document.querySelectorAll(".options");
const singleRoundResult = document.querySelector(".result");
const playerResult = document.querySelector(".player-result");
const computerResult = document.querySelector(".computer-result");
const endResult = document.querySelector(".end-result");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        singleRoundResult.textContent = `It's tie! ${playerSelection}  ties with ${computerSelection}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {

        singleRoundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {

        singleRoundResult.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    }

    playerResult.textContent = "Player: " + playerScore;
    computerResult.textContent = "Computer: " + computerScore;

    showEndResult(playerScore, computerScore);
}

function showEndResult(playerScore, computerScore) {
    if (playerScore == 5) {
        endResult.textContent = "You Won!";
        disableButtons();
    }
    else if (computerScore == 5) {
        endResult.textContent = "You Lost...";
        disableButtons();
    }
}

function disableButtons() {
    userSelections.forEach((userSelection) => {
        userSelection.disabled = true;
    });
}

userSelections.forEach((userSelection) => {
    userSelection.addEventListener("click", (e) => {
        playRound(e.target.value, getComputerChoice());
    });
});