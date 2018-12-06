var minRangeInput = document.querySelector('.min-range');
var maxRangeInput = document.querySelector('.max-range');
var updateRangeBtn = document.querySelector('#update-range');
var challenger1GuessInput = document.querySelector('.challenger1-guess');
var challenger2GuessInput = document.querySelector('.challenger2-guess');
var nameGuessBtn = document.querySelector('#name-guess-submit');
var displayName1 = document.querySelector('.display-name1');
var displayName2 = document.querySelector('.display-name2');
var displayGuess1 = document.querySelector('.c1-current-guess');
var displayGuess2 = document.querySelector('.c2-current-guess');


// Get the minimum and maximum values challenger wishes to play between
updateRangeBtn.addEventListener('click', function(e){
  e.preventDefault();
  let minRangeValue = parseInt(minRangeInput.value);
  let maxRangeValue = parseInt(maxRangeInput.value);
  let minNumber = document.querySelector('.min-number');
  let maxNumber = document.querySelector('.max-number');
  minNumber.innerText = minRangeValue;
  maxNumber.innerText = maxRangeValue;
  minNumber.style.fontWeight = 'bold';
  maxNumber.style.fontWeight = 'bold';
  console.log(minRangeValue);
  console.log(maxRangeValue);
});

// Get Guess number/name and populate score card
nameGuessBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let challenger1Name = document.querySelector('.challenger1-name');
  let challenger2Name = document.querySelector('.challenger2-name');
  let challenger1Guess = parseInt(challenger1GuessInput.value);
  let challenger2Guess = parseInt(challenger2GuessInput.value);
  console.log(challenger1Guess);
  displayName1.innerText = challenger1Name.value;
  displayName2.innerText = challenger2Name.value;
  displayGuess1.innerText = challenger1Guess;
  displayGuess2.innerText = challenger2Guess;
});

// Generate random number between inputed range... default 1-100
function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
