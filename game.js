function computerPlay() { 
    let computerStrategy = [ // Create array for computer. Must use brackets[], not parentheses().
        "rock", 
        "paper", 
        "scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; // Choose random string from computerStrategy. 
    return randomStrategy; // Return the resulting value.
}

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

function playRound() {

    function capitalizeFirstLetter(string) {  // when playRound reports results, i want the first letter in the selection at the beginning of the sentence to be capitalized.
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   

    const computerSelection = computerPlay().toLowerCase(); // capitalize first letter so the winnerMessage and loserMessage will be properly capitalized
    const playerSelection = playerPrompt().toLowerCase();

    let tieMessage = "It's a tie for this round!"; // message shown in case of a tie
    let winnerMessage = `You won this round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`; // message shown if player wins
    let loserMessage = `You lost this round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`; // message shown if player loses

    console.log(`Computer played ${computerSelection}`);
    console.log(`You played ${playerSelection}`);

    if (computerSelection === playerSelection) { // if the answers are the same, it's a tie. case insensitive.
        return console.log(tieMessage)
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return console.log(winnerMessage)
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return console.log(loserMessage)
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return console.log(winnerMessage)
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return console.log(loserMessage)
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return console.log(winnerMessage)
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return console.log(loserMessage)
    }
}

function game() {

    function getScore() {
        let playerScore = 0,
            computerScore = 0;

        if (console.log(tieMessage)) {
            return playerScore++, computerScore++
        } else if (console.log(winnerMessage)) {
            return playerScore++
        } else if (console.log(loserMessage)) {
            return computerScore++
        }
    }

    function finalWinner() {
        if (playerScore === computerScore) {
            return console.log("Unbelievable! The game ends in a tie.")
        } else if (playerScore > computerScore) {
            return console.log("You've won the game!")
        } else if (computerScore > playerScore) {
            return console.log("You've lost the game...")
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound() 
        }
    }

game()