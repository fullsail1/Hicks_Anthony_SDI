/*
Anthony Hicks
SDI Campus
1/24/2015
multiple
 */
//alert("testing again");

//prompt the user for the area and the perimeter of a rectangle

//first setup area of rectangle function
function areaRect(w,h) {
    //code
    //area of rectangle is width * height
    var area = w*h;
    return area;
}


//set up perimeter function

function periRect(w,h){
    //perimeter of a rectangle is 2*width +2*height
    var perimeter = 2*w+2*h;
    return perimeter;

}


//prompt the user for width and height
var width = prompt("please enter width of your rectangle");

//validate it
while(width===""||isNaN(width)){
    //reprompt the user
    width = prompt("please do not leave blank and only use numbers. \nwhat is the width: ");
    
}

var height = prompt("please enter height of your rectangle");

//validate it
while(height===""||isNaN(height)){
    //reprompt the user
    height = prompt("please do not leave blank and only use numbers. \nwhat is the height: ");
}

//function call both functions.....one at a time

var resultArea = areaRect(width, height);
var resultPeri = periRect(width, height);

//report out to user

alert("the area of rectangle " + resultArea + " and the perimeter is " + resultPeri );

console.log("the area of rectangle " + resultArea + " and the perimeter is " + resultPeri );


//combined function to calculte the perimeter and the area

function combinedRect(w,h) {
    //code
    //calc area
    var area = w*h;
    //calc perimeter
    var peri = 2*w+2*h;
    //return both values
    return [area,peri];//note you can create array first


}

//function call
var combinedResults = combinedRect(width, height);

//for just one value?
console.log(combinedResults[0]);
console.log(combinedResults[1]);
console.log(combinedResults);



