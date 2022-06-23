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
            return true // if playerChoice is true, it will pass on.
        } else if (playerChoice.toLowerCase() === 'paper'.toLowerCase()) {
            return true
        } else if (playerChoice.toLowerCase() === 'scissors'.toLowerCase()) {
            return true
        } else {
            console.log('Take the game seriously and try again.')
        }

    if (playerChoice === true) { 
        return 
    }
}

playerSelection();
