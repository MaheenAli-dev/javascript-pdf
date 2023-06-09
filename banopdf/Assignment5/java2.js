// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser


// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var result = number1 + number2;

// document.write("<p>The result of adding " + number1 + " and " + number2 + " is: " + result + "</p>");






// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.


// subtractNumbers;

//     var number2 = parseFloat(prompt("Enter the second number:"));
//     var result = number1 - number2;
//     var number1 = parseFloat(prompt("Enter the first number:"));
    
//     document.write("<p>The result of subtracting " + number2 + " from " + number1 + " is: " + result + "</p>");

    
    
// divideNumbers;

//     var number1 = parseFloat(prompt("Enter the first number:"));
//     var number2 = parseFloat(prompt("Enter the second number:"));
//     var result = number1 / number2;
    
//     document.write("<p>The result of dividing " + number1 + " by " + number2 + " is: " + result + "</p>");

    
// moduloNumbers;

//     var number1 = parseFloat(prompt("Enter the first number:"));
//     var number2 = parseFloat(prompt("Enter the second number:"));
//     var result = number1 % number2;
    
//     document.write("<p>The result of taking the modulo of " + number1 + " by " + number2 + " is: " + result + "</p>");




// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie.


// var number1 = Number(600);
// var number2 = Number(5);
// var result = number1 * number2;
    
// document.write("<p>Total cost to buy " + number2+ " tickets to a movies is " + result + "PKR" + "</p>");




// 5. Write a script to display multiplication table of any 
// number in your browser.

// var heading = "Table of 4"
// var content1 = 4 * 1 ;
// var content2 = 4 * 2 ;
// var content3 = 4 * 3 ;
// var content4 = 4 * 4 ;
// var content5 = 4 * 5 ;
// var content6 = 4 * 6 ;
// var content7 = 4 * 7 ;
// var content8 = 4 * 8 ;
// var content9 = 4 * 9 ;
// var content10 = 4 * 10 ;

// document.write("<p>" + heading + "</p>") 
// document.write("<p>" + "4 * 1 = " + content1 + "</p>")
// document.write("<p>" + "4 * 2 = " + content2 + "</p>")
// document.write("<p>" + "4 * 3 = " + content3 + "</p>")
// document.write("<p>" + "4 * 4 = " + content4 + "</p>")
// document.write("<p>" + "4 * 5 = " + content5 + "</p>")
// document.write("<p>" + "4 * 6 = " + content6 + "</p>")
// document.write("<p>" + "4 * 7 = " + content7 + "</p>")
// document.write("<p>" + "4 * 8 = " + content8 + "</p>")
// document.write("<p>" + "4 * 9 = " + content9 + "</p>")
// document.write("<p>" + "4 * 10 = " + content10 + "</p>")




// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// var celsiusTemperature = 28;
// var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// var ans1 = (celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// var fahrenheitTemperature2 = 82;
// var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
// var ans2 = (fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// document.write("<p>" + ans1 + "</p>" + ans2)






// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser


// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;


// var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
// var totalCost = subtotal + shippingCharges;

// document.write("<h1>Checkout Receipt</h1>");
// document.write("<p>" + "Price of item 1 is " + item1Price + "</p>");
// document.write("<p>" + "Quantity of item1 is " + item1Quantity + "</p>");
// document.write("<p>" + "Price of item 2 is " + item2Price + "</p>");
// document.write("<p>" + "Quantity of item2 is " + item2Quantity + "</p>");
// document.write("<p>" + "Shipping Charges " + shippingCharges + "</p>");
// document.write("<p>" + "Total cost of your order is " + totalCost + "</p>");




// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

// document.write("<h1>Mark Sheet</h1>");
// var obtainedMarks = 804;
// var totalMarks = 980;
// var result = obtainedMarks / totalMarks * 100
// document.write("Total Marks:" + totalMarks + "<p>" + "Obtained Marks:"+ obtainedMarks + "</p>" + "<p>" + "Percentage:" + result + "</p>")




// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)


// document.write("<h1>Curency in PKR</h1>");
// var dollarToPkr = 10 * 105;
// var riyalToPkr = 25 * 28;
// var PKR = dollarToPkr + riyalToPkr
// document.write("Total Currency in PKR: " + PKR)



// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// var num = (2 +  5 ) *  10 
// var result = (num / 2)
// document.write("</p>" + "(2 + 5 ) * 10 = 70 " + "</p>" + "70 / 2 = " + result)



// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”


// var currentYear = 2023;
// var birthYear = prompt("Enter your birth year");
// var result = currentYear - birthYear;
// document.write("<h1>Current Age</h1>")
// document.write("Current Year : " + currentYear + "<br>" + "Birth Year : " + birthYear + "<br>" + "Your Age is : " + result)
// // alert("Your current Age is " + result)




// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var radiusOfCircle = 20;
// var circumference = 2 * 3.142 * radiusOfCircle;
// var area = 3.142 * (20 * 20);
// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of circle: " + radiusOfCircle + "<br>" + "The circumference is: " + circumference + "<br>" + "The area is: " + area)




// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.


// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var estimatedMaximumAge = 65;
// var amountOfSnackPerDay = 3;
// var result = ( estimatedMaximumAge - currentAge ) * amountOfSnackPerDay;
// // document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write("Favourite Snack: " + favoriteSnack + "<br>" + "Current Age: " + currentAge + "<br>" + "Estimated Maximum Age: " + estimatedMaximumAge + "<br>" + "Amount of snacks per day: " + amountOfSnackPerDay + "<br>" + "You will need " + result + " " + favoriteSnack + " to last you until the ripe old age of " + estimatedMaximumAge)