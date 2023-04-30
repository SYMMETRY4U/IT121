const prompt = require('prompt-sync')();
// An array for Rock, Paper, and Scissors first Try
const choices = ["Rock", "Paper", "Scissors"];

// Generate a random number 0-2 for the player and the computer
const playerSelection = Math.floor(Math.random() * 3);
const computerSelection = Math.floor(Math.random() * 3);

// Get the player and computer choices
const playerChoice = choices[playerSelection];
const computerChoice = choices[computerSelection];

// Create a response message to the user
let response = `Player choice: ${playerChoice}\nComputer choice: ${computerChoice}\n`;

// Condition to handle the player and computer selections
let result;

if (playerSelection === computerSelection) {
  result = "It's a tie!";
} else {
  // Return the correct results
  const winningIndex = (playerSelection + 1) % 3;
  
  if (winningIndex === computerSelection) {
    result = "Computer wins!";
  } else {
    result = "Player wins!";
  }
}

// Output message
response += `Result: ${result}`;

// Display the output message in the console
console.log(response);

// Output message
response += `Result: ${result}`;

// Display the output message in the console
console.log(response);
