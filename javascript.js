// create a function that randomly return rock, paper or scissor
function getComputerChoice(){
    const random = Math.random();

    if (random < 1 / 3){
        return "rock";
    } else if (random < 2 / 3){
        return "paper";
    } else{
        return "scissors";
    }
}

console.log(getComputerChoice())

// create a function that takes the user choice and return it
function getHumanChoice(){
    const humanChoice = prompt("Enter your choice: rock, paper, or scissors ");
    return humanChoice;
}
console.log(getHumanChoice())

// create a variable to keep track of players score(Global scope(declaring a variable outside a function so they can be accessed by different function in the program))
// let humanScore = 0;
// let computerScore = 0;

// Create a function to play a single round
// function playRound(humanChoice, computerChoice) {
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice === computerChoice){
//         console.log("It's a tie!")
//     } else if ((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors"&&computerChoice==="paper")){
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//     } else {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     }
// }


// create a function named playGame to play the game 5 rounds,keep track of the scores and declares a winner at the end
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice){
            console.log("It's a tie!")
        } else if ((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors"&&computerChoice==="paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
    let humanSelection;
    let computerSelection;
    
    //Round1
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Round2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Round3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Round4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Round5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Declare the final winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!")
    } else {
        console.log("The game is a tie!")
    }

    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
}

playGame();
