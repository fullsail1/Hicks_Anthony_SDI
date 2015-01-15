
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
var addedEquip = 5;
var lateReturnFee = 4;
var equipmentArray = [40, 40, 40, 0, 0, 0]; //Bikes In Stock, Helmets In Stock, Vests In Stock
var totalEquipIssued;
var totalEquipCost;


bikeRented = parseInt(prompt("how many bikes being rented?"));
 console.log(bikeRented);

 helmetsIssued = parseInt(prompt("How many helmets do you need?"));
 console.log(helmetsIssued);
addedEquip =parseInt(prompt("How many vests do you need?"));
console.log(addedEquip);

 //calculations
 totalEquipIssued = (bikeRented) + (helmetsIssued) + (addedEquip);
 console.log(totalEquipIssued);
 totalEquipCost = 5*(bikeRented) + 5*(addedEquip);
 console.log(totalEquipCost);
 





