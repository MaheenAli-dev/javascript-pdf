// 1. Write a program that displays current date and time in 
// your browser.

// var date = new Date();
// document.write(date)




// 2. Write a program that alerts the current month in words. 
// For example December.

// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = new Date();
// var name = month[d.getMonth()];
// document.write(name)




// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.


// var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var d = new Date();
// var day = weekday[d.getDay()];
// document.write(day)






// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today


// var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var d = new Date();
// var day = weekday[d.getDay()];
// if (day === Saturday && day === Sunday){
//     alert("Its Fun day")
// }



// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”


// var date = [1-30];
// var d = new Date();
// var day = date[d.getDate()];
// if (date <= 15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }






// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.


// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)






// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.


// var time = [1-24];
// var d = new Date();
// var day = time[d.getDate()];
// if (time <= 12){
//     alert("Its PM")
// }
// else{
//     alert("Its AM")
// }





// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var laterDate = new Date(2020, 11, 31);

// alert("Later Date: " + laterDate);




// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var laterDate = new Date(2015, 6, 18);
// var today = new Date();
// var final = today.getTime() - laterDate.getTime();   
// var diff = final / (1000 * 60 * 60 * 24);  
// alert("Later Date: " + diff);







// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.


// var referenceDate = new Date();
// var beginningOf2015 = new Date("January 1, 2015 00:00:00");
// var elapsedSeconds = Math.floor((referenceDate - beginningOf2015) / 1000);
// document.write("Elapsed seconds since the beginning of 2015: " + elapsedSeconds);





// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date: " + currentDate);






// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?


// var startDate = new Date();
//     startDate.setFullYear(startDate.getFullYear() - 100);
//     document.write(startDate);
    



// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var userAge = prompt("Enter Your Age");
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - userAge);
// document.write("Your age is: " + userAge + "<br>" + "Your Birth Year is: " + currentDate);





// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,



// var customerName = prompt("Enter our Name");
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = new Date();
// var name = month[d.getMonth()];
// var units = prompt("Enter Number Of Units");
// var charges = 16;
// var dueBill = charges * units
// var afterBill = (charges * units ) + 350;



// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>" );
// document.write("Current Month: " + name + "<br>" );
// document.write("Number of units: " + units + "<br>" );
// document.write("Charges per unit: " + charges + "<br>" );
// document.write("Net Amount Payable (within Due Date): " + dueBill + "<br>" );
// document.write("Late Payment Surcharge: 350" + "<br>" );
// document.write("Gross Amount Payable (after Due Date): " + afterBill + "<br>" );