
 /*
Anthony Hicks
SDI Campus
1/13/2015
Hicks_Anthony_Functions_assignment
 */
//alert("testing again");

// create function to calculate body mass index

function bodyFatCalc(w,h){ //2 parameters
    
var bmi = 703*(w/(h*h));

return bmi;
}

//create prompts for arguments
//weight & height

var weight = parseInt(prompt("Enter your weight in Pounds."));
//validate
while(weight === ""||weight === isNaN(weight)){
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your weight. " );
  
}

var height = parseInt(prompt("Enter your height in inches."));
//validate
while(height === ""||height === isNaN(height)){
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your height in inches. " );
    
}


// validation made us add Math.round  

var results = (Math.round(bodyFatCalc(weight,height)));
console.log( " Our analysis indicates you BMI is " + results);

//prompt for age

var age = parseInt(prompt("Enter your age."));
while(age === ""||age === isNaN(age)|| age<0 || age >71){ //validate age prompt
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your age. " );
  
}

var bmiResults = function (w, h, age){//3 parameters
//the goal of this function is to calculate body fat percentage.
   var bmi = 703*(w/(h*h));
   var fat= (1.20*bmi)+(0.23*age)-5.4;

    return fat;
}

var results2 = Math.round(bmiResults(weight,height,age));
console.log(" Our analysis indicates you Body Fat Percentage is " + results2 +"%");

//testing code
//I tested my code using 200 for weight; 67 for height..this gave me BMI of 31
//my anonymous function of bmiResults added the parameter of age.
//the age parameter is a prompt.
// in the bmiResults function an equation for body fat percentage is calculated
//to test the code i used the age of 30 this giving me a body fat percentage of 39%.




