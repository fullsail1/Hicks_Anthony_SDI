 /*
Anthony Hicks
SDI Campus
1/13/2015
Day 8 return
 */
//alert("testing again");



//create a function calculating area of a rectangle

function calcArea(w,h) {
    //code
    var area = w*h;
    console.log(area);
    
}

//function call
calcArea(77,9);

function calcArea(w,h) {
    //code
    var area = w*h;
    console.log(area);
    return area;
    
}

var returnedArea = calcArea(77,9);

console.log(returnedArea);



//create a function to calculate the area of a circle

//area = pi*r*r
function circleArea(radius) {
    //code
    var area = Math.PI*radius*radius;
    //return area
    return area
}

//function call
circleArea(6);
var result = circleArea(6);

console.log("the area of the circle is " + result);

var twoArea = result * 2;
console.log(" the area of both circles is " + twoArea.toFixed(0));

var result2 = circleArea(3);
console.log(" the area of a circle with a radius of 3 is " + result2);

//prompt user for radius. Calc area
var userRad = prompt(" Please type in a radius: ");

//validate prompt
while(isNaN(userRad)|| userRad===""){
    userRad=prompt("Please only use numbers\nType in a radius");
}

//parse the variable
userRad = parseInt(userRad);

//create a variable to catch the results!
var userResults = circleArea(userRad);

console.log(" The area of your circle with a radius of " + userRad + " is " + userResults.toFixed(1));





 