 
 /*
Anthony Hicks
SDI Campus
1/13/2015
Prompting
 */
//alert("testing again");

/*
 *var i=0
 *while(condition){
    
    code that runs while condition is true
    incremental change to the counting variable
    or infinite loop!!!
 }
 *
 */

var counter = 0; //initial

while (counter<20){
    //code that will run
    console.log(counter);
    
    //change for the counter
    counter++;
    
}


//do while loop
//the code will run AT LEAST once before checking the condition
 
var i = 0;

do{
    //this code will run before the condition is checked
    //it will also run as long as the condition is true
    console.log("the number is " +i);
    i++;
}while(i<10);


