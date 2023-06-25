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
    playerText.textContent = `You played ${playerSelection}`;
    computerText.textContent = `Computer played ${computerSelection}`;
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
        return "You won!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lost!"
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
       return "You won!"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lost!"
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You won!"
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You lost!"
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
