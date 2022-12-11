/*
let min = parseInt(prompt("Minimum Number is : "));
let max = parseInt(prompt("Maximum Number is : "));

const result = Math.floor(Math.random() * (max - min + 1) + min );

let guess = parseInt(prompt("Guess the number : "));

if(guess == result){
   alert("Great! You're Correct!!🎉");
}else{
   alert("Ohho! You're Wrong :( ❌");
}

*/

const minval = document.getElementById("min");
const maxval = document.getElementById("max");
const guessedNumber = document.getElementById("guess");

function myFunc() {
  const mini = parseInt(minval.value);
  const maxi = parseInt(maxval.value);
  const guessedNum = parseInt(guessedNumber.value);

  if (guessedNum < mini || guessedNum > maxi) {
    document.getElementById("guessbutton").disabled = true;
  } else {
    document.getElementById("guessbutton").disabled = false;
  } 
}

const GuessButton = document
  .getElementById("guessbutton")
  .addEventListener("click", function () {
    const min = parseInt(minval.value);
    const max = parseInt(maxval.value);
    const guessedNum = parseInt(guessedNumber.value);
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    if (result === guessedNum) {
      alert("You're correct!🎉");
    } else {
      alert("Wrong!!❌ correct ans is : " + result);
    }
  });
