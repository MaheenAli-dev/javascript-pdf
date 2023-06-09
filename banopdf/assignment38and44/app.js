// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


// function power(a, b) {
//     var result = 1;

//     for (var i = 0; i < b; i++) {
//       result *= a;
//     }

//     return result;
//   }
//   var base = 2;
//   var exponent = 3;
//   var result = power(base, exponent);
//   console.log(base + " raised to the power of " + exponent + " is: " + result);

// /2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   var year = parseInt(prompt("Enter a year:"));

//   if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function calculateArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }

//   function calculateSemiPerimeter(a, b, c) {
//     var s = (a + b + c) / 2;
//     return s;
//   }
//   var sideA = 3;
//   var sideB = 4;
//   var sideC = 5;

//   var area = calculateArea(sideA, sideB, sideC);
//   console.log("The area of the triangle is: " + area);


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// function calculateAverage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     var average = totalMarks / 3;
//     return average;
//   }

//   function calculatePercentage(subject1, subject2, subject3) {
//     var totalMarks = subject1 + subject2 + subject3;
//     var totalMarksPossible = 300;
//     var percentage = (totalMarks / totalMarksPossible) * 100;
//     return percentage;
//   }

//   function mainFunction(subject1, subject2, subject3) {
//     var average = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(subject1, subject2, subject3);

//     console.log("Marks in subject 1: " + subject1);
//     console.log("Marks in subject 2: " + subject2);
//     console.log("Marks in subject 3: " + subject3);
//     console.log("Average marks: " + average);
//     console.log("Percentage: " + percentage + "%");
//   }

//   var subject1Marks = 80;
//   var subject2Marks = 90;
//   var subject3Marks = 95;

//   mainFunction(subject1Marks, subject2Marks, subject3Marks);


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }

//     return -1; 
//   }
//   var str = "Hello, World!";
//   var char = "o";
//   var index = customIndexOf(str, char);

//   console.log("Index of '" + char + "' in the string: " + index);


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function deleteVowels(sentence) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {
//       var char = sentence[i];

//       if (vowels.indexOf(char.toLowerCase()) === -1) {
//         result += char;
//       }
//     }

//     return result;
//   }
//   var sentence = "This is a sample sentence.";
//   var result = deleteVowels(sentence);

//   console.log("Original sentence: " + sentence);
//   console.log("Modified sentence without vowels: " + result);


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence:
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countOccurrences(text) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var char1 = text[i].toLowerCase();
//         var char2 = text[i + 1].toLowerCase();

//         switch (char1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 if (vowels.indexOf(char2) !== -1) {
//                     count++;
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }

//     return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// var occurrenceCount = countOccurrences(sentence);

// console.log("Sentence: " + sentence);
// console.log("Number of occurrences of two vowels in succession: " + occurrenceCount);
// document.write("Sentence: " + sentence + "<br>");
// document.write("Number of occurrences of two vowels in succession: " + occurrenceCount);


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceKm) {
//     return distanceKm * 1000;
// }
// function convertToFeet(distanceKm) {
//     return distanceKm * 3280.84;
// }
// function convertToInches(distanceKm) {
//     return distanceKm * 39370.08;
// }
// function convertToCentimeters(distanceKm) {
//     return distanceKm * 100000;
// }
// var distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// var distanceMeters = convertToMeters(distanceKm);
// var distanceFeet = convertToFeet(distanceKm);
// var distanceInches = convertToInches(distanceKm);
// var distanceCentimeters = convertToCentimeters(distanceKm);

// console.log("Distance in meters: " + distanceMeters);
// document.write("Distance in meters: " + distanceMeters + "<br>");
// console.log("Distance in feet: " + distanceFeet);
// document.write("Distance in feet: " + distanceFeet) + "<br>";
// console.log("Distance in inches: " + distanceInches);
// document.write("Distance in inches: " + distanceInches + "<br>");
// console.log("Distance in centimeters: " + distanceCentimeters);
// document.write("Distance in centimeters: " + distanceCentimeters + "<br>");


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
  
//     if (hoursWorked <= regularHours) {
//       return 0;
//     } else {
//       var overtimeHours = hoursWorked - regularHours;
//       var overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     }
//   }

//   var hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee:"));
  
//   var overtimePay = calculateOvertimePay(hoursWorked);
  
//   console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));
  
// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer

// function calculateCurrencyNotes(amount) {
//     var hundredNotes = Math.floor(amount / 100);
//     var fiftyNotes = Math.floor((amount % 100) / 50);
//     var tenNotes = Math.floor(((amount % 100) % 50) / 10);
  
//     return {
//       hundredNotes: hundredNotes,
//       fiftyNotes: fiftyNotes,
//       tenNotes: tenNotes
//     };
//   }
  
//   var amount = parseFloat(prompt("Enter the amount to be withdrawn (in hundreds):"));
  
//   var notes = calculateCurrencyNotes(amount);
  
//   console.log("Number of 100 notes: " + notes.hundredNotes);
//   document.write("Number of 100 notes: " + notes.hundredNotes + "<br>");
//   console.log("Number of 50 notes: " + notes.fiftyNotes);
//   document.write("Number of 50 notes: " + notes.fiftyNotes + "<br>");
//   console.log("Number of 10 notes: " + notes.tenNotes);
//   document.write("Number of 10 notes: " + notes.tenNotes + "<br>");
  