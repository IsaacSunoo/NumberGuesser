// User inputs
var minRangeInput = document.querySelector('.min-range');
var maxRangeInput = document.querySelector('.max-range');
var challenger1GuessInput = document.querySelector('.challenger1-guess');
var challenger2GuessInput = document.querySelector('.challenger2-guess');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');

// User names and guesses
var displayName1 = document.querySelector('.display-name1');
var displayName2 = document.querySelector('.display-name2');
var displayGuess1 = document.querySelector('.c1-current-guess');
var displayGuess2 = document.querySelector('.c2-current-guess');
var highOrLow1 = document.querySelector('.high-or-low1');
var highOrLow2 = document.querySelector('.high-or-low2');
var challenger1Name = document.querySelector('.challenger1-name');
var challenger2Name = document.querySelector('.challenger2-name');

// Buttons
var updateRangeBtn = document.querySelector('#update-range');
var nameGuessBtn = document.querySelector('#name-guess-submit');

var randomNumber = null;

// Get the minimum and maximum values challenger wishes to play between
updateRangeBtn.addEventListener('click', function(e){
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
});

// Get Guess number/name and populate score card
nameGuessBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var challenger1Guess = parseInt(challenger1GuessInput.value);
  var challenger2Guess = parseInt(challenger2GuessInput.value);
  console.log(challenger1Guess);
  console.log(challenger1Name.value);
  displayName1.innerText = challenger1Name.value;
  displayName2.innerText = challenger2Name.value;
  displayGuess1.innerText = challenger1Guess;
  displayGuess2.innerText = challenger2Guess;
  evaluateGuess(challenger1Guess, challenger2Guess, randomNumber, minRangeValue, maxRangeValue);
});

// Generate random number between inputed range... default 1-100
function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  return randomNumber;
}

// Determine if guess is higher, lower, or equal to random NUMBER
function evaluateGuess(guess1, guess2, randomNumber, min, max) {
  if(guess1 < min || guess1 > max) {
    console.error("Number is not in range");
    return alert(`Number must be between ${min} and ${max}`);
  } else if(guess1 < randomNumber) {
    console.log("Player 1: guess is to low");
    highOrLow1.innerText = "that's to low";
  } else if(guess1 > randomNumber) {
    console.log("Player 2: guess it to high");
    highOrLow1.innerText = "that's to high";
  } else {
    console.log("Correct Guess");
    highOrLow1.innerText = "SPOT ON!"
  }


}
