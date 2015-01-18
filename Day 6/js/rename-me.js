//alert("JavaScript works!");

//get outside temperature

var airtemp = parseInt(prompt("what's the temperature outside?", "65"));
//airtemp = parseInt(airtemp);


//create the variable for the water temperature
var waterTemp;

//conditional to see what we're doing
if (airtemp>= 85) {
    console.log("lets go to the beach!");
    waterTemp = parseInt(prompt("what's the temperature of the water?", "75"));

    if (waterTemp >= 75) {
    console.log("Lets get in the water!");
    
    }else {
    console.log("Lets build a sand castle");
    }
    
}else{
    console.log("we're going to the movies.");
    
}

//round
//normal rounding .5 and up

var num1 = 9.54444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);

//floor
//returns x, rounded down to the nearest integer/ wholenumber
var num2 = 6.1;
console.log(num2);
num2= Math.floor(num2);
console.log(num2);

//ceil(x)
//return x rounded up to the next integer/whole number
var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);



