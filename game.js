function computerPlay() { 
    let computerStrategy = [ // Create array for computer. Must use brackets[], not parentheses().
        "Rock", 
        "Paper", 
        "Scissors"
    ];

    let randomStrategy = computerStrategy[Math.floor(Math.random() * computerStrategy.length)]; // Choose random string from computerStrategy. 
    return randomStrategy; // Return the resulting value.
}

let result = computerPlay(); // "Result" is a placeholder for when I figure out what variable to feed this value into.
console.log(result); // "Show value in console so that I can see it."