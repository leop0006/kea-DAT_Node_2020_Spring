// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------

var newNumber = Number(numberOne) + Number(numberTwo);

console.log(newNumber);
// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var result = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);

console.log(result);

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals



// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"

// Get me the character "c"

var char = letters.charAt(2);

console.log(char);

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

var newFact = fact.replace("j", "J")

console.log(newFact);

// capitalize the J in Javascript
