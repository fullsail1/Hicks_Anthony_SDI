
 /*
Anthony Hicks
SDI Campus
1/13/2015
Expressions_Assignment
 */
//alert("testing again");

//Bike shop

//internal storage

var helmetsIssued;
var bikeRentalFee = 5;
var vestIssued = 5;
var lateReturnFee = 4;
var equipmentArray = [40, 40, 40, 0, 0, 0]; //Bikes In Stock, Helmets In Stock, Vests In Stock
var totalEquipIssued;
var totalEquipCost;

//prompts

bikeRented = parseInt(prompt("how many bikes being rented?"));
 console.log(bikeRented);
 equipmentArray[3]= bikeRented;

 helmetsIssued = parseInt(prompt("How many helmets do you need?"));
 console.log(helmetsIssued);
 equipmentArray[4]= helmetsIssued;

vestIssued =parseInt(prompt("How many vests do you need?"));
console.log(vestIssued);
 equipmentArray[5]= vestIssued;

 //calculations
 //bike shop audits



 totalEquipIssued = (bikeRented) + (helmetsIssued) + (vestIssued);
 console.log( "the total amount of equipment issued = " + totalEquipIssued + " pieces ");
 equipmentArray[6]=totalEquipIssued;

 totalEquipCost = 5*(bikeRented) + 5*(helmetsIssued) +5*(vestIssued);
 console.log(" the total amount of monies made from equipment rental = " + " $ "+ totalEquipCost);
 equipmentArray[7]= totalEquipCost;

 //update array
equipmentArray[0]= equipmentArray[0]- bikeRented;
 equipmentArray[1]= equipmentArray[1]-helmetsIssued;
 equipmentArray[2]= equipmentArray[2]-vestIssued;
 console.log("your daily inventory and sales report is as follows " + equipmentArray);





