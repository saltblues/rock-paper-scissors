function computerPlay() { 
    let computerStrategy = [ // Create array for computer. Must use brackets[], not parentheses().
        "Rock", 
        "Paper", 
        "Scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; // Choose random string from computerStrategy. 
    return randomStrategy; // Return the resulting value.
}

let computerSelection = computerPlay(); 
console.log(computerSelection); // "Show value in console so that I can see it."

function playerPrompt() { // Prompt for the player to type in their choice.
    let playerInput = (prompt('Choose rock, paper, or scissors.', '')); // playerInput is the string entered into the prompt.
        if (playerInput.toLowerCase() === 'rock'.toLowerCase()) { // .toLowerCase() converts playerInput to lowercase and compares to choices in lowercase, so that it is case insensitive.
            return playerInput // If playerInput is true, it will pass on.
        } else if (playerInput.toLowerCase() === 'paper'.toLowerCase()) {
            return playerInput // Previously, I put "return playerInput === true" but that would make it more lengthy when I need the value. Then I put "return playerInput === 'Rock'" but I'm not sure if it's better to have it as the player typed it.
        } else if (playerInput.toLowerCase() === 'scissors'.toLowerCase()) {
            return playerInput
        } else {
            console.log('Take the game seriously and try again.') // If playerInput is not rock paper or scissors it will not be accepted. Player must try again.
        }
    }

let playerSelection = playerPrompt();
console.log(playerSelection);

let tieMessage = alert("It's a tie!");
let winnerMessage = alert("You won!");
let loserMessage = alert("You lost!");

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) { // if the answers are the same, it's a tie. case insensitive.
        return tieMessage
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        return winnerMessage
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        return loserMessage
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        return winnerMessage
    } else if (computerSelection.toLowercase() === "paper" && playerSelection.toLowerCase() === "rock") {
        return loserMessage
    } else if (computerSelection.toLowercase() === "scissors" && playerSelection.toLowercase() === "rock") {
        return winnerMessage
    } else if (computerSelection.toLowercase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        return loserMessage
    }
}
