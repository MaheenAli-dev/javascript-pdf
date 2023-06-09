// 1. Write a function that displays current date & time in your
// browser.

// function displayDateTime() {
//     var currentDate = new Date();
//     var dateTimeString = currentDate.toLocaleString();
//     document.getElementById('datetime').textContent = 'Current Date & Time: ' + dateTimeString;
//   }
  
//   displayDateTime();
  
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greetUser(firstName, lastName) {
//     var fullName = firstName + ' ' + lastName;
//     console.log('Hello, ' + fullName + '! Welcome!');
//   }
  
//   // Example usage:
//   greetUser('maheen', 'ali');
 

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers

// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
    
//     if (isNaN(num1) || isNaN(num2)) {
//       return "Invalid input. Please enter valid numbers.";
//     }
    
//     var sum = num1 + num2;
//     return sum;
//   }

//   var result = addNumbers();
//   console.log("The sum of the two numbers is: " + result);
  

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculate(num1, num2, operator) {
//     var result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return "Invalid operator. Please enter a valid operator (+, -, *, /).";
//     }
  
//     document.write("The result of the operation is: " + result);
//   }
  
//   var number1 = parseFloat(prompt("Enter the first number:"));
//   var number2 = parseFloat(prompt("Enter the second number:"));
//   var operator = prompt("Enter the operator (+, -, *, /):");
  
//   calculate(number1, number2, operator);
  
// 5. Write a function that squares its argument.

// function square(number) {
//     return number * number;
//   }
  
//   var num = 5;
//   var result = square(num);
//   console.log("The square of " + num + " is: " + result);
  

// 6. Write a function that computes factorial of a number

// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }

//   var num = 5;
//   var result = factorial(num);
//   console.log("The factorial of " + num + " is: " + result);
  

// 7. Write a function that take start and end number as inputs
// & display counting in your browser

// function displayCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//       document.write(i + "<br>");
//     }
//   }
  
//   var startNumber = parseInt(prompt("Enter the start number:"));
//   var endNumber = parseInt(prompt("Enter the end number:"));
  
//   displayCounting(startNumber, endNumber);
  
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(side) {
//       return side * side;
//     }
  
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
  
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     return hypotenuse;
//   }

//   var baseLength = 3;
//   var perpendicularLength = 4;
  
//   var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
//   console.log("The hypotenuse of the right-angle triangle is: " + hypotenuseLength);
// document.write("The hypotenuse of the right-angle triangle is: " + hypotenuseLength);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function calculateRectangleArea1(width, height) {
//     var area = width * height;
//     return area;
//   }
//   function calculateRectangleArea2(width, height) {
//     var area = width * height;
//     return area;
//   }

//   var area1 = calculateRectangleArea1(5, 8);
//   console.log("Area of the rectangle (approach 1): " + area1);

//   var rectangleWidth = 6;
//   var rectangleHeight = 9;
//   var area2 = calculateRectangleArea2(rectangleWidth, rectangleHeight);
//   console.log("Area of the rectangle (approach 2): " + area2);
  

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function isPalindrome(str) {
//     var processedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     var reversedStr = processedStr.split('').reverse().join('');

//     if (processedStr === reversedStr) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   var word = "madam";
//   var result = isPalindrome(word);
  
//   if (result) {
//     console.log("'" + word + "' is a palindrome.");
//   } else {
//     console.log("'" + word + "' is not a palindrome.");
//   }
  