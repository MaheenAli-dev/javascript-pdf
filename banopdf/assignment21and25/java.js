// // Chap # 17-20 STRING METHODS


// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = alert(firstName + " " + lastName)




// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var favoriteMobileModel = prompt("Enter Your Favourite Mobile Model");
// for (var i = 0; i > favoriteMobileModel.length; i++){
// }
// document.write("My favourite phone is: " + favoriteMobileModel + "<br>" + "Length of string: " +  favoriteMobileModel.length)  




// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var word = "Pakistani";
//     var letter = "n";
//     var index = word.indexOf(letter);

//     document.write("The index of the letter 'n' in the word 'Pakistani' is: " + index);




// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.


// var word = "Hello World";
//     var letter = "l";
//     var index = word.lastIndexOf(letter);

//     document.write("The index of the letter 'l' in the word 'Pakistani' is: " + index);



// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.



// var word = "Pakistani";
// var character = word[3];
// document.write("String: " + word + "<br>" + "Character at index 3: " + character)



// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat( " " + lastName)
// document.write(fullName)






// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.


// let city = "Hyderabad";
// let result = city.replace("Hyderabad", "Islamabad");
// document.write("City: " + city + "<br>" + "After Replacement: " + result)






// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;


// var word = document.getElementById("demo").innerHTML; 
// var result = word.replace(/and/gi, "&");
// document.getElementById("demo").innerHTML = result;





// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser

// var number = parseInt("472")
// document.write("Value: " + number + "<br>" + "Type: String" + "<br>" + "Value: " + number + "<br>" + "Type: Number")




// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var userInput = prompt("Enter any random word");
// var result = userInput.toUpperCase();
// alert(result)



// 11. Write a program that takes user input. Convert and 
// show the input in title case.



// var user = prompt("Enter Your Name");
// var letter = user.charAt(0);
// var rem = user.slice(1);
// var caps = letter.toUpperCase() + rem.toLowerCase();
// alert(caps)




// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// var numAsString = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>" + "Result: " + numAsString);






// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .



// var username = prompt("Enter your username:");
// var containsSpecialSymbol = /[.@,!]/.test(username);

// if (containsSpecialSymbol) {
//   alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//   alert("Username is valid: " + username);
// }






// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to Order Sir/Maam?");
// var index = A.indexOf(userInput)

// if (userInput = A){
//     alert(userInput + "is Available at index " + index + " in our bakery");
// }
// else {
//     alert("We are sorry. C + userInput + "is not Available in our bakery")
// }





// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// var userInput = prompt("Enter a password");
// var password = /^[A-Za-z]\w{7,14}$/

// if (userInput = password){
//     alert("Corresct Password")
// }
// else {
//     alert("Enter a valid Password")
// }





// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";

// var array = university.split("");

// for (var i = 0; i < array.length; i++) {
//   document.write(array[i] + "<br>");
// }






// 17. Write a program to display the last character of a user
// input.


// var userInput = prompt("Enter a word:");

// var lastCharacter = userInput[userInput.length - 1];

// alert("Last character of user input is '" + lastCharacter + "'");





// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string

// var sentence = "The quick brown fox jumps over the lazy dog";

// var lowercaseSentence = sentence.toLowerCase();

// var words = lowercaseSentence.split(" ");

// var count = 0;


// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }


// var result = "occurrence" + (count === 1 ? "" : "s");
// console.log("There are " + count + " " + result + " of word \"the\"");
// document.write("There are " + count + " " + result + " of word \"the\"");