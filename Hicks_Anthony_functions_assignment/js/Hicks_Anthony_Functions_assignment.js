
 /*
Anthony Hicks
SDI Campus
1/13/2015
Hicks_Anthony_Functions_assignment
 */
//alert("testing again");


function bodyFatCalc(w,h){
    
var bmi = 703*(w/(h*h));

return bmi;
}

var weight = prompt("Enter your weight.");
while(weight === ""||weight === isNaN(weight)){
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your weight. " );
  
}

var height = prompt("Enter your height.");
while(height === ""||height === isNaN(height)){
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your height. " );
    
}





var results = (Math.round(bodyFatCalc(weight,height)));
console.log( " Our analysis indicates you BMI is " + results);



