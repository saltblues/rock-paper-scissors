let playerScore = 0;
let computerScore = 0;

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let playerSelection;
let computerSelection;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    playerSelection = button.textContent;
    computerSelection = computerPlay();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = playRound();
}));

function computerPlay() { 
    const computerStrategy = [
        "rock", 
        "paper", 
        "scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; 
    return randomStrategy
}

function playRound() {

    if (computerSelection == playerSelection) {
        return "Draw!"
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You Won!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You Lost!"
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
       return "You Won!"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You Lost!"
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You Won!"
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You Lost!"
    }

}

function game() {

        if (playerScore === 5) {
            console.log("You've won the game!")
        } else if (computerScore === 5) {
            console.log("You've lost the game...")
        } else {
            playRound()
        }
}

game()
