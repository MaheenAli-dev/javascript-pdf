
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var number = parseInt(prompt("Enter a positive integer:"));

// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");


// 2.Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = parseFloat(prompt("Enter a negative floating-point number:"));

// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = parseFloat(prompt("Enter a number:"));
// var absoluteValue = Math.abs(number);

// document.write("The absolute value of " + number + " is " + absoluteValue);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// var diceValue = Math.floor(Math.random() * 6) + 1;

// console.log("Random dice value is: " + diceValue);
// document.write("Random dice value is: " + diceValue);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";


// console.log("Random coin value is: " + coinValue);
// document.write("Random coin value is: " + coinValue);


// 6. Write a program that shows a random number between 1
// and 100 in your browser


// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var userInput = prompt("Enter your weight:");
// var weight = userInput.replace(/\D/g, '');
// document.write("Your weight is: " + weight + " kgs");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userInput = prompt("Guess the secret number (between 1 and 10):");

// var userNumber = parseInt(userInput);

// if (userNumber === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// } else {
//   alert("Oops! The secret number was " + secretNumber + ". Try again!");
// }










