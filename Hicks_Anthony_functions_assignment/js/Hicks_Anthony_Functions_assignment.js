
 /*
Anthony Hicks
SDI Campus
1/13/2015
Hicks_Anthony_Functions_assignment
 */
//alert("testing again");

// create function to calculate body fat

function bodyFatCalc(w,h){
    
var bmi = 703*(w/(h*h));

return bmi;
}

//create prompts for arguments
//weight & height

var weight = parseInt(prompt("Enter your weight."));
//validate
while(weight === ""||weight === isNaN(weight)){
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your weight. " );
  
}
9
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

var bmiResults = function (w, h, age){
   //we want to add age in the mix saying that bmi compared to age will yeild a result of normal, high or crazy
   var bmi = 703*(w/(h*h));
   var fat= (1.20*bmi)+(0.23*age)-5.4;

    return fat;
}

var results2 = Math.round(bmiResults(weight,height,age));
console.log(" Our analysis indicates you Body Fat Percentage is " + results2 +"%");



bmiResults(weight, height, age);
//console.log(bmiResults);



