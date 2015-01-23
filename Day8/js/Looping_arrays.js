 /*
Anthony Hicks
SDI Campus
1/13/2015
looping arrays
 */
alert("testing again");





var names = ["scooby", "scrappy", "velma", "wilma"];




for (var i = 0; i<names.length; i++){
    console.log(i);
    console.log(names[i]);
    console.log("you solved the case " + names[i]);
    
    
}

//create an array of bills and add them up

var bills= [50,10,5,20,10];


var totalBills = 0;

for(j= 0; j<bills.length; j++){
    
    totalBills = totalBills + bills[j];
    
    if (bills[j]>=20) {
        //code
        totalBills += bills[j];
        
    }
    
}

console.log