// User inputs
var minRangeInput = document.querySelector('.min-range');
var maxRangeInput = document.querySelector('.max-range');
var challenger1GuessInput = document.querySelector('.challenger1-guess');
var challenger2GuessInput = document.querySelector('.challenger2-guess');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');

// User names and guesses
var displayName1 = document.querySelectorAll('.display-name1');
var displayName2 = document.querySelectorAll('.display-name2');
var displayGuess1 = document.querySelector('.c1-current-guess');
var displayGuess2 = document.querySelector('.c2-current-guess');
var highOrLow1 = document.querySelector('.high-or-low1');
var highOrLow2 = document.querySelector('.high-or-low2');
var challenger1Name = document.querySelector('.challenger1-name');
var challenger2Name = document.querySelector('.challenger2-name');
var winnerName = document.querySelector('.winner-name');

// Buttons
var updateRangeBtn = document.querySelector('#update-range');
var nameGuessBtn = document.querySelector('#name-guess-submit');
var resetGameBtn = document.querySelector('#reset-game-btn');
var clearGameBtn = document.querySelector('#clear-game-btn');

var randomNumber = null;

// Event Listeners
updateRangeBtn.addEventListener('click', setMinAndMaxRange);
nameGuessBtn.addEventListener('click', setNamesAndGuesses);

// Change min and max range numbers
function setMinAndMaxRange(e) {
  e.preventDefault();
  var minRangeValue = parseInt(minRangeInput.value);
  var maxRangeValue = parseInt(maxRangeInput.value);
  minNumber.innerText = minRangeValue;
  maxNumber.innerText = maxRangeValue;
  minNumber.style.fontWeight = 'bold';
  maxNumber.style.fontWeight = 'bold';
  console.log(minRangeValue);
  console.log(maxRangeValue);
  generateRandomNumber(minRangeValue, maxRangeValue);
}

// Change name and guesses
function setNamesAndGuesses(e) {
  e.preventDefault();
  var minRangeValue = parseInt(minRangeInput.value);
  var maxRangeValue = parseInt(maxRangeInput.value);
  var challenger1Guess = parseInt(challenger1GuessInput.value);
  var challenger2Guess = parseInt(challenger2GuessInput.value);

  console.log(challenger1Guess);
  console.log(challenger1Name.value);

  displayNames();

  displayGuess1.innerText = challenger1Guess;
  displayGuess2.innerText = challenger2Guess;

  if(differentNumbers(challenger1Guess, challenger2Guess) === true) {
    alert("Please Make different guesses!")
  } else {
    evaluateGuessOne(challenger1Guess, randomNumber, minRangeValue, maxRangeValue);
    evaluateGuessTwo(challenger2Guess, randomNumber, minRangeValue, maxRangeValue);
  }
}

// Display Names On scorecard and winner card
function displayNames() {
  for (var i = 0; i < displayName1.length; i++) {
    displayName1[i].innerText = challenger1Name.value;
  }
  console.log("display name ONE: " + displayName1[i]);
  console.log("challenger TWO Name: " + challenger1Name.value);
  for (var i = 0; i < displayName2.length; i++) {
    displayName2[i].innerText = challenger2Name.value;
  }
  console.log("Display name TWO: " + displayName2[i]);
  console.log("Challenger TWO Name: " + challenger2Name.value);
}

// function displayGuess() {
//   displayGuess1.innerText = challenger1Guess;
//   displayGuess2.innerText = challenger2Guess;
// }

// Generate random number between inputed range... default 1-100
function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Random number is: " + randomNumber);
    return randomNumber;
  }

  // Determine if guess is higher, lower, or equal to random NUMBER
  function evaluateGuessOne(guess, randomNumber, min, max) {
    console.log("minumum number is: " + min);
    console.log("max number is: " + max);
    if(guess < min || guess > max) {
      console.error("Number is not in range");
      highOrLow1.innerText = "Out of range";
      return alert(`Number must be between ${min} and ${max}`);
    } else if(isNaN(guess)){
      console.log("NOT A NUMBER");
      displayGuess1.innerText = "--";
      highOrLow1.innerText = "That's Not a Number...";
      alert("Please enter a valid number");
    } else if(guess < randomNumber) {
      console.log("Player 1: guess is to low: " + guess);
      highOrLow1.innerText = "that's to low";
    } else if(guess > randomNumber) {
      console.log("Player 1: guess it to high: " + guess);
      highOrLow1.innerText = "that's to high";
    } else {
      console.log("Correct Guess");
      highOrLow1.innerText = "SPOT ON!";
      winnerName.innerText = challenger1Name.value;
    }
  }

  function evaluateGuessTwo(guess, randomNumber, min, max) {
    if(guess < min || guess > max) {
      console.error("Number is not in range");
      highOrLow1.innerText = "Out of range";
      return alert(`Number must be between ${min} and ${max}`);
    } else if(isNaN(guess)){
      console.log("NOT A NUMBER");
      displayGuess2.innerText = "--";
      highOrLow2.innerText = "That's Not a Number...";
      alert("Please enter a valid number");
    } else if(guess < randomNumber) {
      console.log("Player 2: guess is to low : " + guess);
      highOrLow2.innerText = "that's to low";
    } else if(guess > randomNumber) {
      console.log("Player 2: guess it to high: " + guess);
      highOrLow2.innerText = "that's to high";
    } else {
      console.log("Correct Guess");
      highOrLow2.innerText = "SPOT ON!"
      winnerName.innerText = challenger2Name.value;
    }
  }

  // If both users guess same number
  function differentNumbers(guess1, guess2) {
    if (guess1 === guess2) {
      console.log("SAME GUESS");
      highOrLow1.innerText = "There can";
      highOrLow2.innerText = "Only be ONE"
      return true;
    }
  }

  // Append a new car for winner of round
  function newWinnerCard() {

  }
