//alert("yup");
/*
var userInput = prompt("please type in your name.")

//validitating a prompt with a conditional.
if (userInput===" ") {
    //code
    //user did not type anything in
    userInput= prompt("Please don't leave it blank. Type in your name.");
    
}

//instead use a while loop!
//check the input multiple times till it changes

var firstName = prompt("Please type your First name");

while (firstName===" ") {
    //code
    console.log(" Please do not enter blank..")
}

//Test to see if it is a number
//isNan() - test ii
}
*/
var userInput=prompt("Please type in your name");

//Validating a prompt with a conditional

if (userInput==="") {
    //User did not type anything in
    userInput=prompt("Please do not leave blank. Type in your name.");
}

//Instead, use a while loop
//Check the input multiple times as many as it takes

var firstName=prompt("Please type in your first name:");

while (firstName==="") {
    //The user typed in nothing, re-prompt for first name
    firstName=prompt("Please type in your first name and DO NOT leave this blank.");
}


//Test to see if it is a number
//isNaN() - tests what is inside of the (). Is it not a number?
//Numbers return false
//Everything else returns true

console.log(isNaN("Monkey")); //Returns true
console.log(isNaN(7)); //Returns false

//Lets ask the user their age

var age=prompt("Please enter your age:");

//Validate that the user typed in a number
while(isNaN(age)||age ===""){
    //This runs anytime that the age is not a number
    //Reprompt the user for a number
    age=prompt("Only use numbers, please enter your age:");
}

var choice=prompt("Please type in yes or no:");

//Convert to lower case

choice=choice.toLowerCase();

while(choice!="yes" &&choice!="no"){
    choice=prompt("Please only type in yes or no.");
}