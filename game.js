let playerScore = 0;
let computerScore = 0;

function computerPlay() { 
    let computerStrategy = [ // Create array for computer. Must use brackets[], not parentheses().
        "rock", 
        "paper", 
        "scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; // Choose random string from computerStrategy. 
    return randomStrategy // Return the resulting value.
}

function playerPrompt() { // Prompt for the player to type in their choice.
    let playerInput = (prompt('Choose rock, paper, or scissors.', '')); // playerInput is the string entered into the prompt.
        if (playerInput.toLowerCase() === 'rock') { // .toLowerCase() converts playerInput to lowercase and compares to choices in lowercase, so that it is case insensitive.
            return playerInput // If playerInput is true, it will pass on.
        } else if (playerInput.toLowerCase() === 'paper') {
            return playerInput // Previously, I put "return playerInput === true" but that would make it more lengthy when I need the value. Then I put "return playerInput === 'Rock'" but I'm not sure if it's better to have it as the player typed it.
        } else if (playerInput.toLowerCase() === 'scissors') {
            return playerInput
        } else {
            console.log('Take the game seriously and try again.') // If playerInput is not rock paper or scissors it will not be accepted. Player must try again.
        }
    }

function playRound() {

    function capitalizeFirstLetter(string) {  // when playRound reports results, i want the first letter in the selection at the beginning of the sentence to be capitalized.
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   

    const computerSelection = computerPlay().toLowerCase(); // capitalize first letter so the winnerMessage and loserMessage will be properly capitalized
    const playerSelection = playerPrompt().toLowerCase();

    console.log(`Computer played ${computerSelection}`);
    console.log(`You played ${playerSelection}`);

    if (computerSelection === playerSelection) { // if the answers are the same, it's a tie. case insensitive.
        playerWin = false;
        computerWin = false;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerWin = true;
        computerWin = false;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        playerWin = false;
        computerWin = true;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerWin = true;
        computerWin = false;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        playerWin = false;
        computerWin = true;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerWin = true;
        computerWin = false;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        playerWin = false;
        computerWin = true;
    }

    if (playerWin === true && computerWin === false) {
        playerScore++;
        console.log(`You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}! Your score is ${playerScore} to ${computerScore}`);
    } else if (playerWin === false && computerWin === true) {
        computerScore++;
        console.log(`You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}! Your score is ${playerScore} to ${computerScore}`); // message shown if player loses);
    } else if (playerWin === false && computerWin === false) {
        console.log(`It's a tie for this round! Your score is ${playerScore} to ${computerScore}`); // message shown in case of a tie)
    }

}

function game() {

    function finalWinner() {
        if (playerScore === computerScore) {
            console.log("Unbelievable! The game ends in a draw.")
        } else if (playerScore > computerScore) {
            console.log("You've won the game!")
        } else if (computerScore > playerScore) {
            console.log("You've lost the game...")
        }
    }

    for (let i = 0; i < 6; i++) {
        if (i === 5) {
            return finalWinner()
        }
        else {
            playRound()
        }
    }
   
}

game()
