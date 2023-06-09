//1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multidimensionalArray = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

// var element = matrix[1][2]; 

// matrix[0][1] = 10; 
  
// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
//   }
  
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// var tableNumber = parseInt(prompt("Enter the table number:"));
// var tableLength = parseInt(prompt("Enter the table length:"));

// console.log("Multiplication Table of " + tableNumber + ":");

// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   console.log(tableNumber + " x " + i + " = " + result + "<br>");
//   document.write(tableNumber + " x " + i + " = " + result +"<br>");
// }



// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]



// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Items of the 'fruits' array:");

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i] + "<br>");
//   document.write(fruits[i] + "<br>");
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Items of the 'fruits' array with their positions:");

// for (var i = 0; i < fruits.length; i++) {
//   console.log("Position " + (i + 1) + ": " + fruits[i] + "<br>");
//   document.write("Position " + (i + 1) + ": " + fruits[i] + "<br>");
// }


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

  
  
    // document.write("a. Counting: ");
    // for (var i = 1; i <= 15; i++) {
    //   document.write(i + ", " + "<br>" );
    // }
  
    // document.write("b. Reverse counting: ");
    // for (var i = 10; i >= 1; i--) {
    //   document.write(i + ", " + "<br>");
    // }

    // document.write("c. Even: ");
    // for (var i = 0; i <= 20; i += 2) {
    //   document.write(i + ", " + "<br>");
    // }

    // document.write("d. Odd: ");
    // for (var i = 1; i <= 19; i += 2) {
    //   document.write(i + ", " + "<br>");
    // }

    // document.write("e. Series: ");
    // for (var i = 1; i <= 10; i++) {
    //   document.write(i * 2 + "k, " + "<br>");
    // }





//  7.   You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not


//     var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search:");

// var found = false;
// var position = -1;

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = true;
//     position = i;
//     break;
//   }
// }

// if (found) {
//   console.log("Item found at position " + position + " in the array.");
//   alert("Item found at position " + position + " in the array.");
// } else {
//   console.log("Item not found in the array.");
//   alert("Item not found in the array.");
// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].



// var A = [24, 53, 78, 91, 12];

// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }

// console.log("The largest number in the array is: " + largestNumber);
// document.write("The largest number in the array is: " + largestNumber);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]




// var A = [24, 53, 78, 91, 12];

// var smallestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < smallestNumber) {
//     smallestNumber = A[i];
//   }
// }

// console.log("The smallest number in the array is: " + smallestNumber);
// document.write("The smallest number in the array is: " + smallestNumber);



// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//       document.write(i + "<br>")
//     }
//   }
  

// var username = prompt("Enter your username:");
// var containsSpecialSymbol = /[.@,!]/.test(username);

// if (containsSpecialSymbol) {
//   alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//   alert("Username is valid: " + username);
// }

