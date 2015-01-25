/*
Anthony Hicks
SDI Campus
1/24/2015
multiple
 */
//alert("testing again");

var results2 = triArea(6,7);
console.log(results2);

function triArea(b,h) {
    //code
    //area = 1/2 * base * height
    var area = .5 * b * h;
    return area
}
/*
THIS DOES NOT WORK
FUNCTION CALL HAS TO COME AFTER ANON FUNCTION DEFINITION
var results4 = triAreaAnon(8,9);
*/

//call function
var results1 = triArea(7,7);
console.log(results1);

//create an anonymous function that calc the area of triangle
var triAreaAnon = function(b,h){
     var area = .5 * b * h;
    return area
    
}
var results3 = triAreaAnon(4,5);
console.log("results of anonymous function after defined is " + results3 );



