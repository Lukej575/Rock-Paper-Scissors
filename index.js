const choices = ["rock", "paper", "scissors"];

function playRound() {
    // Getting player input
    let playerChoice = prompt("Choose one: rock, paper, or scissors: ").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        console.log("You chose " + `${playerChoice}`);
    } else {
        console.log("Error! Try again!");
    }

    // Getting computer input
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("The computer chose " + `${computerChoice}`);

    // Declare winner
    let winner = declareWinner(playerChoice, computerChoice);

    function declareWinner(playerChoice, computerChoice) {
        if (playerChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Rock beats paper!");
        } else if (playerChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper!");
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!");
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper!");
        } else {
            console.log("It's a tie!");
        }
    }
}

playRound();