

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10 ;
// var newNum = ++a;
// document.write("Result:"+ "<br>"+"The value of a is: 10 " +  "<br>" );

// var a = 11 ;
// var newNum = ++a;
// document.write("The value of ++a is: 11 " +  "<br>" + "Now the value of a is: " + newNum + "<br>");

// var a = 11 ;
// var newNum = a++;
// document.write("The value of a++ is: 11 " +  "<br>" + "Now the value of a is: " + newNum + "<br>")

// var a = 11 ;
// var newNum = --a;
// document.write("The value of --a is: 11 " +  "<br>" + "Now the value of a is: " + newNum + "<br>")

// var a = 11 ;
// var newNum = a--;
// document.write("The value of a-- is: 11 " +  "<br>" + "Now the value of a is: " + newNum)

// 2. What will be the output in variables a, b & result after
// execution of the following script:


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;
// var newNum = --a;
// console.log(newNum)

// var a = 2;
// var b = 1;
// var newNum = --a - --b;
// console.log(newNum)

// var a = 2;
// var b = 1;
// var newNum = --a - --b + ++b;
// console.log(newNum)

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a = 2" + "<br>" + "b = 1"+ "<br>" +"Result : " + result)


// 3.Write a program that takes input a name from user &
// greet the user


// var username = prompt("Enter your name:");
// console.log("Hello, " + userName + "! Welcome!");
// document.write(userName + " Welcome To Our Website");


// 4.Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default


// let number = prompt("Enter a number:");
// if (number === null || number === "") {
//   number = 5;
// }

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// document.write("<ul>");

// for (let i = 1; i <= 10; i++) {
//   let result = number * i;
//   document.write("<li>" + number + " x " + i + " = " + result + "</li>");
// }

// document.write("</ul>");



// var userUnput = prompt("Enter any num for table")
// var heading = "Table of your favourite num"
// var content1 = userUnput * 1 ;
// var content2 = userUnput * 2 ;
// var content3 = userUnput * 3 ;
// var content4 = userUnput * 4 ;
// var content5 = userUnput * 5 ;
// var content6 = userUnput * 6 ;
// var content7 = userUnput * 7 ;
// var content8 = userUnput * 8 ;
// var content9 = userUnput * 9 ;
// var content10 = userUnput * 10 ;

// document.write("<p>" + heading + "</p>") 
// document.write("<p>" + userUnput + " * 1 = " + content1 + "</p>")
// document.write("<p>" + userUnput + " * 2 = " + content2 + "</p>")
// document.write("<p>" + userUnput + " * 3 = " + content3 + "</p>")
// document.write("<p>" + userUnput + " * 4 = " + content4 + "</p>")
// document.write("<p>" + userUnput + " * 5 = " + content5 + "</p>")
// document.write("<p>" + userUnput + " * 6 = " + content6 + "</p>")
// document.write("<p>" + userUnput + " * 7 = " + content7 + "</p>")
// document.write("<p>" + userUnput + " * 8 = " + content8 + "</p>")
// document.write("<p>" + userUnput + " * 9 = " + content9 + "</p>")
// document.write("<p>" + userUnput + " * 10 = " + content10 + "</p>")



// 5.Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// let subject1 = prompt("Enter subject 1 name:");
// let subject2 = prompt("Enter subject 2 name:");
// let subject3 = prompt("Enter subject 3 name:");

// let totalMarks = 100;

// let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1));

// let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2));
// let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3));

// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h2>Subject-wise Result</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("</table>");

// document.write("<h2>Total Marks: " + (totalMarks * 3) + "</h2>");
// document.write("<h2>Obtained Marks: " + totalObtainedMarks + "</h2>");
// document.write("<h2>Percentage: " + percentage.toFixed(2) + "%</h2>");





//  var subject1 = prompt("Enter the name of subject 1")
// var subject2 = prompt("Enter the name of subject 2")
// var subject3 = prompt("Enter the name of subject 3")
// var totalMarks = 100
// var marksSub1 = Number (prompt("Enter the Obtained Marks of subject 1"))
// var marksSub2 = Number (prompt("Enter the Obtained Marks of subject 2"))
// var marksSub3 = Number (prompt("Enter the Obtained Marks of subject 3"))
// var result1 = marksSub1 / totalMarks * 100
// var result2 = marksSub2 / totalMarks * 100
// var result3 = marksSub3 / totalMarks * 100
// document.write("<h5>Subject Total Marks Obtained Marks Percentage</h5>" +"<br>" )
// document.write(subject1 + "  " + totalMarks + "  " + marksSub1 + "  " + result1 + "<br>" )
// document.write(subject2 + "  " + totalMarks + "  " + marksSub2 + "  " + result2 + "<br>" )
// document.write(subject4 + "  " + totalMarks + "  " + marksSub4 + "  " + result4 + "<br>" )