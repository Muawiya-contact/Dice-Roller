// Select elements
const diceImage = document.getElementById("diceImage");
const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");

// Function to roll the dice
function rollDice() {
  // Generate a random number between 1 and 6
  const diceRoll = Math.floor(Math.random() * 6) + 1;

  // Update the dice image
  diceImage.src = `dice-${diceRoll}.png`;

  // Update the result text
  resultText.textContent = `You rolled a ${diceRoll}!`;

  // Add a quick animation
  diceImage.style.transform = "rotate(360deg)";
  setTimeout(() => {
    diceImage.style.transform = "rotate(0deg)";
  }, 300);
}

// Add event listener to the button
rollButton.addEventListener("click", rollDice);
