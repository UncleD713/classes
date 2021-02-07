// Part I 
//Declare 3 variables: userChoice, randomNumber, computerChoice
var userChoice;
var randomNumber;
var computerChoice;

//JavaScript Prompt Function
var userChoice = prompt("heads or tails");

//Generate a random number 
function randomRange(myMin, myMax) {
 
  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin
   
}

var randomNumber = randomRange(0, 1);

console.log(randomNumber);

//Use a conditional to check whether the random number generated was a 0 or 1

 if ((randomNumber)  == 0) {
    computerChoice = "heads";
 
  } else if (userChoice == 1) {
     computerChoice = "tails";
  }

if (userChoice == computerChoice) {
   alert("You guessed right! The coin flip landed on" + computerChoice);

} else {
   
   if(userChoice !== computerChoice) {
      alert("Sorry, the coin flip landed on" + userChoice);
   }
}

// Part II

var birthYear = 1993;

birthYear = prompt("Enter the year you were born"); 


if ((2021 - birthYear) > 21) {
   alert("You are old enough to drink in the US");

} else if ((2021 - birthYear) == 21) {
   alert("You are old enough to drink in the US...barely"); 

} else if ((2021 - birthYear)  < 21) {
   alert("Sorry, you are not old enough to drink in the US");
}