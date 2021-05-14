let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, compGuess, target) => {
  return getAbsoluteDistance(userGuess, target) <= getAbsoluteDistance(compGuess, target);
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1, num2);
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const checkUserInput = (input) => {
  if (input < 0 || input > 9) {
    alert('Your guess is out of range.');
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};