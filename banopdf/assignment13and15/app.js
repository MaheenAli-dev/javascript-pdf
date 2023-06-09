// 1. Declare an empty array using JS literal notation to store
// student names in future

// var studentNames = [];


// 2. Declare an empty array using JS object notation to store
// student names in future.

// var studentNames = { length: 0 };

// 3. Declare and initialize a strings array.

// var strings = ["Hello", "World", "web developer", "graphic designer"];


// 4. Declare and initialize a numbers array.

// var numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.





// 6. Declare and initialize a mixed array.


// var booleanArray = [true, false, true, true, false];

// console.log(booleanArray[0]);
// alert(booleanArray[0]);
// console.log(booleanArray[1]);
// alert(booleanArray[1]);
// console.log(booleanArray[2]);
// alert(booleanArray[2]);
// console.log(booleanArray[3]);
// alert(booleanArray[3]);
// console.log(booleanArray[4]);
// alert(booleanArray[4]);


// 6. Declare and initialize a mixed array.

// var mixedArray = [1, "hello", true, 3.14, [2, 4, 6], { name: "Maheen", age: 18 }];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD", "BSC"];

// var output = "";
// for (var i = 0; i < qualifications.length; i++) {
//   output += (i + 1) + ") " + qualifications[i] + "<br>";
// }
// document.write(output);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:



// var studentNames = ["Maheen", "Laiba", "John"];

// var scores = [480, 320, 230];

// var totalMarks = 500;

// var percentages = [];
// for (var i = 0; i < scores.length; i++) {
//     percentages[i] = (scores[i] / totalMarks) * 100;
// }


// for (var i = 0; i < studentNames.length; i++) {
//     var studentName = studentNames[i];
//     var score = scores[i];
//     var percentage = percentages[i];
//     console.log(
//         "Score of " +
//         studentName +
//         " is " +
//         score +
//         " and percentage is " +
//         percentage +
//         "%"
//     );
// }


// 9. write javascript Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// var colors = ["Red", "Green", "Blue"];


// console.log("Original Array: " + colors);

// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);

// console.log("Updated Array (a): " + colors);

// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// console.log("Updated Array (b): " + colors);

// colors.unshift("Purple", "Yellow");

// console.log("Updated Array (c): " + colors);

// colors.shift();

// console.log("Updated Array (d): " + colors);

// colors.pop();


// console.log("Updated Array (e): " + colors);

// var indexToAdd = prompt("Enter the index at which you want to add a color:");
// var colorToAdd = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorToAdd);

// console.log("Updated Array (f): " + colors);

// var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
// var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numberOfColorsToDelete);

// console.log("Updated Array (g): " + colors);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var stdscores = [320, 230, 480, 120];

// console.log("Scores of students: " + stdscores);

// stdscores.sort(function (a, b) {
//     return a - b;
// });

// console.log("Ordered scores of students: " + stdscores);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["Karachi", "Peshawar", "Lahore", "Islamabad", "Quetta"];

// var selectedCities = [];
// selectedCities.push(cities[3]);
// selectedCities.push(cities[4]);


// console.log("Cities list: " + cities);

// console.log("Selected cities list: " + selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// var arr = ["This", "is", "my", "cat"];

// var result = arr.join(" ");

// console.log(result);




// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// console.log("Out: " + devices.shift());
// console.log("Out: " + devices.shift());
// console.log("Out: " + devices.shift());
// console.log("Out: " + devices.shift());


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)



// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// console.log("Out: " + devices.pop());
// console.log("Out: " + devices.pop());
// console.log("Out: " + devices.pop());
// console.log("Out: " + devices.pop());




// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:



// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');
// for (var i = 0; i < manufacturers.length; i++) {
//   document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');


