let playerScore = 0;
let computerScore = 0;

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

function computerPlay() { 
    const computerStrategy = [
        "rock", 
        "paper", 
        "scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; 
    return randomStrategy
}

choiceBtns.forEach(button => button.addEventListener("click", () => {

    
}))

//function playerPrompt() {
//    let playerInput = (prompt('Choose rock, paper, or scissors.', ''));
//        if (playerInput.toLowerCase() === 'rock') { 
//            return playerInput
//        } else if (playerInput.toLowerCase() === 'paper') {
//            return playerInput
//        } else if (playerInput.toLowerCase() === 'scissors') {
//            return playerInput
//        } else {
//            console.log('Take the game seriously and try again.')
//        }
//    }

function playRound() {

    function capitalizeFirstLetter(string) {  // capitalize first letter of the result report
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   

    const computerSelection = computerPlay().toLowerCase();
    const playerSelection = playerPrompt().toLowerCase();

    console.log(`Computer played ${computerSelection}`);
    console.log(`You played ${playerSelection}`);

    if (computerSelection === playerSelection) {
        console.log(`It's a tie for this round! Your score is ${playerScore} to ${computerScore}`)
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        console.log(`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}! Your score is ${playerScore} to ${computerScore}`);
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        console.log(`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}! Your score is ${playerScore} to ${computerScore}`);
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        console.log(`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}! Your score is ${playerScore} to ${computerScore}`);
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        console.log(`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}! Your score is ${playerScore} to ${computerScore}`);
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        console.log(`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}! Your score is ${playerScore} to ${computerScore}`);
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        console.log(`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}! Your score is ${playerScore} to ${computerScore}`);
    }

//    if (playerWin === true && computerWin === false) {
//        playerScore++;
//        console.log(`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}! Your score is ${playerScore} to ${computerScore}`);
//    } else if (playerWin === false && computerWin === true) {
//        computerScore++;
//        console.log(`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}! Your score is ${playerScore} to ${computerScore}`);
//    } else if (playerWin === false && computerWin === false) {
//        console.log(`It's a tie for this round! Your score is ${playerScore} to ${computerScore}`);
//    }

}

function game() {

//    function finalWinner() {
        if (playerScore === 5) {
            console.log("You've won the game!")
        } else if (computerScore === 5) {
            console.log("You've lost the game...")
        } else {
            playRound()
        }
//    }

//    if (playerScore === 5 || computerScore === 5) {
//        return finalWinner()
//    } else {
//        playRound()
//    }

//    for (let i = 0; i < 6; i++) {
//        if (i === 5) {
//            return finalWinner()
//        }
//        else {
//            playRound()
//        }
//    }
   
}

game()
