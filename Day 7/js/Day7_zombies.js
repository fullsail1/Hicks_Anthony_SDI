//alert("yup");

//zombie attack
//there is a zombie at FullSail
//it can bite 

var numZombies;
var numBites;
var numDays;
var daysTakes;


























//how many days will it take to reach a million zombies?

while(numZombies <= 1000000){
    
    //new zombies
    var newZombies = numZombies + numBites;
    
    //how many zombies we have?
    numZombies += newZombies

    //add 1 to the total number of days it takes
    daysTakes++;
    
}

console.log("it will take " + dayTakes + " days for a million zombies?")