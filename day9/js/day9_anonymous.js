/*
Anthony Hicks
SDI Campus
1/24/2015
multiple
 */
//alert("testing again");
/*
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
*/

//calculate how much pizza costs per square inch and per slice.

//prompt the user for:
//radius of pizza
//cost of pizza
//# of slice per pizza

var pizzaRadius = prompt("what is the radius of your pizza");

//validate prompts
while(pizzaRadius === ""||isNaN(pizzaRadius)){
    //reprompt user
    pizzaRadius = prompt("please do not leave blank and be sure to use numbers.\nWhat is the radius of your pizza?");
    
}

//do while validation
do{
    //prompt the user
    var pizzaCost = prompt("How much does your pizza cost in total?");

} while(pizzaCost === "" || isNaN(pizzaCost));

var pizzaSlices = prompt("how many slices are in your pizza?");

while(pizzaSlices === "" || isNaN(pizzaCSlices)){
     pizzaSlices = prompt("please do not leave blank and be sure to use numbers.\nhow many slices are in your pizza?");
    
}

//function call that starts the lordFunction

var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);


//create a function that will start all the other functions

function lordFunction(radius, cost, slices) {
    //code
    //calculate the area
    var area = pizzaArea(radius);
    //calc the cost per area
    var areaCost = pizzaSqInCost(cost,area);
    //var costPerSlice 
    
}
//create a function that calculates the area of the pizza

function pizzaArea(r){
    //area PI * r*r
    var area = Math.PI *r* r;
    return area;

}

//create a function that calculates the price per sq in of pizza
function pizzaSqInCost(price, area) {
    //code
    //price/area
    var costPerIn = price/area;
    //round to 2 decimal
    costPerIn=costPerIn.toFixed(2);
    return costPerIn;
}
//function that calculates the price perslice
function pricePerSlice(price, slice) {
    //code
    var costPerSlice = price/slice;
    costPerSlice =costPerSlice.toFixed(2);
    return costPerSlice;

}

