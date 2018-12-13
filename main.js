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
var deleteBtn = document.querySelector('#delete-btn');

var randomNumber = null;

// Event Listeners
updateRangeBtn.addEventListener('click', setMinAndMaxRange);
nameGuessBtn.addEventListener('click', setNamesAndGuesses);
resetGameBtn.addEventListener('click', resetGame);
challenger1GuessInput.addEventListener('keyup', disableClearBtn);
challenger2GuessInput.addEventListener('keyup', disableClearBtn);

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
  displayRangeError();
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
  displayEmptyInputError();

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

function resetNames() {
  for (var i = 0; i < displayName1.length; i++) {
    displayName1[i].innerText = "Challenger 1 Name";
  }
  for (var i = 0; i < displayName2.length; i++) {
    displayName2[i].innerText = "Challenger 2 Name";
  }

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
      highOrLow1.innerText = "BOOM!";
      // winnerName.innerText = challenger1Name.value;
      newWinnerCard(challenger1Name.innerText, challenger2Name.innerText, challenger1Name.innerText);
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
      highOrLow2.innerText = "BOOM!"
      newWinnerCard();
      winnerName.innerText = challenger2Name.value;
      newWinnerCard(challenger1Name.innerText, challenger2Name.innerText, challenger2Name.innerText);
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

  // Clear button
  function clearInputs(guess1, guess2) {
    if(!guess1 === undefined && !guess2 === undefined) {
      clearGameBtn.classList.remove('disabled-btn');
      guess1.innerText = "--"
      guess2.innerText = "--"
      console.log("Inputs have been cleared");
    }
  }

  // Reset game
  function resetGame(e) {
    setMinAndMaxRange(e);
    displayGuess1.innerText = "0";
    displayGuess2.innerText = "0";
    resetNames();
  }

  // Display Error Messages
  function displayRangeError() {
    var min = parseInt(minRangeInput.value);
    var max = parseInt(maxRangeInput.value);

    if(min >= max | isNaN(min.value) | isNaN(max.value)) {
      minRangeInput.style.borderColor = "#DD1972";
      maxRangeInput.style.borderColor = "#DD1972";
      alert("Minimum number must be less then Max number & Input can't be empty")
    }

    if(max > min | isNaN(min.value) | isNaN(max.value)){
      minRangeInput.style.border = "#DCDCDC solid 2px";
      maxRangeInput.style.border = "#DCDCDC solid 2px";
    }


  }

  // Display error if input box is empty
  function displayEmptyInputError() {
    if (challenger1Name.value === "" | challenger2Name.value === "") {
      challenger1Name.style.borderColor = "#DD1972";
      challenger2Name.style.borderColor = "#DD1972";
      alert("Name must be entered");
    }
    if (challenger1GuessInput.value === "" | challenger2GuessInput.value === "") {
      challenger1GuessInput.style.border = "#DCDCDC solid 2px";
      challenger2GuessInput.style.border = "#DCDCDC solid 2px";
      alert("Player must enter a guess");
    }
  }

  // Disable Reset button if nothing to reset
  function disableResetBtn(e) {

  }

  // Disable Clear button if nothing to clear
  function disableClearBtn(e) {
    if(challenger1GuessInput.value !== '' && challenger2GuessInput.value !== '') {
      clearGameBtn.disabled = false;
    } else {
      clearGameBtn.disabled = true;
    }
  }

  // Add 10 to max and decrease min by 10;
  function alterGamerRange(min, max) {

  }



  var appendSection = document.querySelector('.right-side');
  // Append a new car for winner of round
  function newWinnerCard(challenger1, challenger2, winner) {
    var newCard =
    `
    <div class="winner-card">
      <div class="card-top center-text">
        <h3 class="display-name1">${challenger1}</h3>
        <span class="margin-left-right">vs</span>
        <span class="dark"><h3 class="display-name2"${challenger2}</h3></span>
      </div>
      <hr>
      <div class="card-middle center-text">
        <h2 class="winner-name">C${winner}</h2>
        <span class="winner-name">WINNER</span>
      </div>
      <hr>
      <div class="card-bottom">
        <p>GUESSES <span>MINUTES</span></p>
        <button type="submit" name="delete" class="delete-btn">x</button>
      </div>
    </div>
    `
    appendSection.innerHTML = newCard + appendSection.innerHTML;
  }

  // Delete card
  function deleteCard() {
    if (event.target.className === deleteBtn) {
      event.target.parentElement.parentElement.remove();
    }
  }
