// // Chap # 12-13  IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 


// 1.Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// var userInput= prompt("Enter any Random Condition")
// if (userInput >= 'A' && userInput <= 'Z'){
//     console.log("Uppercase letter");

// }
// else if (userInput >= 'a' && userInput <= 'z'){
//     console.log("Lowercase letter");
// }
// else {
//     console.log("Number");
// }




// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// var num1 = prompt("Input the First integer", "0");
// var num2 = prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    alert("The values "+ num1+ " and "+num2+ " are equal.");
//   }
  




// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.



// var userInput = prompt("Enter any Random number");
	
//     if(userInput  > 0)
//     {
//        alert("The entered number is positive");
//     }
//     else if(userInput  < 0)
//     {
//        alert("The entered number is negative");
//     }
//     else
//     {
//         alert("The number is zero");
//     }






// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise


// var arr = ("a" , "e" , "i" , "o" , "u");
// var userInput = prompt("Enter any random Alphabet");

// if (userInput = arr){
//     alert("True")
// }
// else {
//     alert("False")
// }





// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// var password1 = "apple";
// var password2 = prompt("Enter the password");

// if (password1 = password2){
//     alert("Correct! The password you entered matches the original password")
// }
// else if (password1 !== password2){
//     alert("Incorrect Password");
// }
// else {
//     alert("Please Enter Your Password");
// }





// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var hour = prompt("Enter the current hour time");
// if (hour < 18) {
//     alert("Good day")
// }
// else {
//     alert("Good evening")
// }




// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


// var time = prompt("Enter the time between 0000-2400");
// if (time >= 0000 && time < 1200){
//     alert("Good Morning")
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good Evening")
// }
// else {
//     alert("Good Night")
// }