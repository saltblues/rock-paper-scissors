let playerScore = 0;
let computerScore = 0;

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let playerSelection;
let computerSelection;
let result;
let playerScoreText = document.querySelector("#playerScoreText")
let computerScoreText = document.querySelector("#computerScoreText");
let gameResult = document.querySelector('#gameResult');

choiceBtns.forEach(button => button.addEventListener("click", () => {

    playerSelection = button.textContent;
    computerSelection = computerPlay();
    playerText.textContent = `You played ${playerSelection}`;
    computerText.textContent = `Computer played ${computerSelection}`;
    resultText.textContent = playRound();
    playerScoreText.textContent = `You: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    gameResult.textContent = finalScore();
}));

function disableButtons() {
    choiceBtns.forEach(elem => {
        elem.disabled = true
    })
}

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
        playerScore++
        return "You won!"
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore++
        return "You lost!"
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore++
    return "You won!"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore++
        return "You lost!"
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore++
        return "You won!"
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore++
        return "You lost!"
    }
}


function finalScore() {
    
if (playerScore === 5) {
    disableButtons()
    return "You've won the game! Refresh to play again."
} else if (computerScore === 5) {
    disableButtons()
    return "You've lost the game... Refresh to play again."
} else {
    return "Play another round!"
    }
}
