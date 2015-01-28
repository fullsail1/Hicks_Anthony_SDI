
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


var bmiResults = function bmiColor(weight, height, age){
   
   var bmi = 703*(w/(h*h));
    if (age >= 0  || age<=27 && bmi>50) {
        //code
        console.log("  Invisible.    Your BMI indicates that you should call a priest. " )
      
    } else if (age >= 28||age <=45 && bmi > 60) {
            //code
             console.log( " CYAN.  Your BMI indicates you should eat more Apples & BAILLALQUH fruit!");
        }else
        
        console.log("  Invisible.    Your BMI indicates that you should call a priest. " )
    
    return bmiResults ;
}


var results2= function bmiColor(bmiResults){

}

}



