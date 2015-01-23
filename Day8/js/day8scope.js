 /*
Anthony Hicks
SDI Campus
1/13/2015
scope (can only be seen in....)
 */
//alert("testing again");


// variable scope
// variables inside and outside a function

//try not to use that same variable names
//however in large files it will be almost imposible

//variables created inside of functions can only
//be seen inside those functions

//create a variable for width in out MAIN code(outside the function)

var width = 5; //scoped out side the function or main code

//create a function that calculates the perimerter of a rectangle

function calcPeri(){
    
    var width = 10; //is scoped to the function calcperi
    console.log("inside the function the value of width is " + width);
    
    var height = 20
    var perimeter = width*2 + height*2;
    console.log("inside of function the perimeter is " + perimeter)
}

calcPeri();

