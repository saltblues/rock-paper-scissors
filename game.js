function computerPlay() { 
    let computerStrategy = [ // Create array for computer. Must use brackets[], not parentheses().
        "Rock", 
        "Paper", 
        "Scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; // Choose random string from computerStrategy. 
    return randomStrategy; // Return the resulting value.
}

let computerSelection = computerPlay(); // "Result" is a placeholder for when I figure out what variable to feed this value into.
console.log(computerSelection); // "Show value in console so that I can see it."

function playerPrompt() { // Prompt for the player to type in their choice.
    let playerChoice = (prompt('Choose rock, paper, or scissors.', '')); // playerChoice is the string entered into the prompt.
        if (playerChoice.toLowerCase() === 'rock'.toLowerCase()) { // .toLowerCase() converts playerChoice to lowercase and compares to choices in lowercase, so that it is case insensitive.
            return playerChoice // If playerChoice is true, it will pass on.
        } else if (playerChoice.toLowerCase() === 'paper'.toLowerCase()) {
            return playerChoice // Previously, I put "return playerChoice === true" but that would make it more lengthy when I need the value. Then I put "return playerChoice === 'Rock'" but I'm not sure if it's better to have it as the player typed it.
        } else if (playerChoice.toLowerCase() === 'scissors'.toLowerCase()) {
            return playerChoice
        } else {
            console.log('Take the game seriously and try again.') // If playerChoice is not rock paper or scissors it will not be accepted. Player must try again.
        }
    }

let playerSelection = playerPrompt();
console.log(playerSelection);
