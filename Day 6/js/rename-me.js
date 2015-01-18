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

