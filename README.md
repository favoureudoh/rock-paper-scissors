# Rock, Paper, Scissors 🎮

A console-based **Vanilla JavaScript** implementation of the classic Rock, Paper, Scissors game. No frameworks, no external dependencies—just pure JavaScript logic running in the browser. 

---

## 🛠️ How It Works

The game runs in the browser console over a 5-round match against the computer:

* **Computer Choice (`getComputerChoice`):** Randomly selects `"rock"`, `"paper"`, or `"scissors"` using `Math.random()`.
* **Human Choice (`getHumanChoice`):** Prompts the player for their move and handles case-insensitive input (e.g., `"rock"`, `"ROCK"`, `"RocK"`).
* **Round Logic (`playRound`):** Compares both choices, logs the outcome of the round (e.g., *"You win! scissors beats paper"*), and updates the round winner's score.
* **Game Loop (`playGame`):** Runs 5 consecutive rounds, tracks `humanScore` and `computerScore`, and declares the overall winner at the end of the match.

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Open your browser's Developer Tools Console (`F12` or `Cmd + Option + I` on Mac) to play and view the match results.