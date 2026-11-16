let humanScore = 0;
let computerScore = 0;

// DOM Elements
const buttons = document.querySelectorAll('#choices button');
const roundResultDisplay = document.querySelector('#round-result');
const scoreDisplay = document.querySelector('#score');
const winnerDisplay = document.querySelector('#winner-announcement');

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  // Stop playing if someone already reached 5 points
  if (humanScore >= 5 || computerScore >= 5) return;

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    roundResultDisplay.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    roundResultDisplay.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
  } else {
    computerScore++;
    roundResultDisplay.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
  }

  // Update running score
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Check for overall winner (First to 5)
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    winnerDisplay.textContent = '🎉 Game Over! You won the match!';
    disableButtons();
  } else if (computerScore === 5) {
    winnerDisplay.textContent = '💻 Game Over! The computer won the match!';
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Attach event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id; // 'rock', 'paper', or 'scissors'
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
});