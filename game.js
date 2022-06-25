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

    const computerSelection = computerPlay().toLowerCase();
    const playerSelection = playerPrompt().toLowerCase();

    let tieMessage = "It's a tie!";
    let winnerMessage = "You won this round!";
    let loserMessage = "You lost this round!";

    console.log(`Computer played ${computerSelection}`);
    console.log(`You played ${playerSelection}`);

    function getScore() {
        let playerScore = 0,
            computerScore = 0;
        
        return [playerScore, computerScore];
    }
    
    let score = getScore();
    let scoreReport = `Your score is ${playerScore} to ${computerScore}`;

    if (computerSelection === playerSelection) { // If the selections are the same, it's a tie. Release tieMessage.
        playerScore ++;
        computerScore ++; 
        console.log(scoreReport)
        return score;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        computerScore + 0;
        console.log(scoreReport);
        return score;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        playerScore + 0;
        computerScore++;
        console.log(scoreReport);
        return score;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        computerScore + 0;
        console.log(scoreReport);
        return score;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        playerScore + 0;
        computerScore++;
        console.log(scoreReport);
        return score;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        computerScore + 0;
        console.log(scoreReport);
        return score;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        playerScore + 0;
        computerScore++;
        console.log(scoreReport);
        return score;
    }
}

function game() {
    
    playRound()
    getScore()

    for (let i = 0; i < 5; i++) {

        if ((playerScore + computerScore === 5) || (playerScore + computerScore === 10)) {
            return finalResult();
        }
    }
    
    function finalResult() {
        if (playerScore > computerScore) {
        console.log("You won the game!");
        }
        else if (playerScore < computerScore) {
        console.log("You lost the game...");
        }
        else if (computerScore === playerScore) {
        console.log("Unbelievable! The game ends in a tie.");
        }
    }
   
}

game()
