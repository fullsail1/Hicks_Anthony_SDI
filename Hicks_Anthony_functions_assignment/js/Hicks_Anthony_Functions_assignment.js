
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


var age = prompt("Enter your age.");
while(age === ""||age === isNaN(age)){
    
    //reprompt
    prompt("Please DO NOT USE - Words and be sure to use numbers\nEnter your age. " );
  
}

var bmiResults = function (w, h, age){
   
   var bmi = 703*(w/(h*h));
   
    if (age >= 0  || age<=27 && bmi<15||bmi<=19) {
        //code
        console.log("  Green.    Your BMI of " + bmi + " indicates that you are in good standing. Eat more green leafy veggies. " )
      
    } else if (age >=28 ||age<=45 && bmi >=20|| bmi <=24) {
            //code
             console.log( " CYAN.  Your BMI of " + bmi +  " indicates you should eat more Apples & BAILLALQUH fruit!");
        }else
        
        console.log("  Invisible.    Your BMI indicates that you should call a priest. " )
    
    return ;
}

var results2 = function (weight,height,age){

console.log()

}
bmiResults(weight, height, age);
//console.log(bmiResults);




