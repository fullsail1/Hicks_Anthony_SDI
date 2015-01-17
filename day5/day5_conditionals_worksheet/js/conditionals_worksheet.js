
 /*
Anthony Hicks
SDI Campus
1/13/2015
Conditional Worksheet
 */ /*
//alert("testing again");

//last chance for gas

 //variables

 var gasEfficiency = 10;
 var gasLevel = 50;
 var tankCapacity = 50;
 var gallonsInTanks;
 var distanceOnTank;

  //calculations

gallonsInTanks = gasLevel/100 * tankCapacity
 console.log(gallonsInTanks);

distanceOnTank = gasEfficiency * gallonsInTanks
 console.log(" current miles to empty = " + distanceOnTank + " miles");


 //conditionals


 if(distanceOnTank<200){
  console.log("You only have " + gallonsInTanks + " gallons of gas in your tank, better get gas now while you can!");

 }else{
  console.log("Yes, you can make it without stopping for gas!");

 }

 //question 2

 //grades

 //variables

 var grade = prompt("Please enter score for grade");
 var gradeLetters = ["A", "B", "C", "D", "F"];



 //conditionals

 if(grade<=1||grade<=69){
  console.log("your grade is an " + gradeLetters[4]);
 }else if(grade<=70||grade<=74){
  console.log("your grade is an " + gradeLetters[3]);
 }else if(grade<=75||grade<=79){
  console.log("your grade is an " + gradeLetters[2]);
 }else if(grade<=80||grade<=89){
  console.log("your grade is an " + gradeLetters[1]);
 }else if(grade<=90||grade<=100){
  console.log("your grade is an " + gradeLetters[0]);
 }else{
  console.log("number does not exist");
 }

*/

//question 3

//movie tickets

 // variables


 var age = prompt("How old are you please");
 var movieTime = prompt("What movie time would you like");
 var fullTicket = 12;
 var discountTicket = 7;


 //code
 if(age<=10||age>=55){
  console.log("Ticket price is " + discountTicket);

 }else if(movieTime>=3 && movieTime<=5){
  console.log("Ticket price is " + discountTicket);

 }else {
  console.log("Ticket price is " + fullTicket);

 }
