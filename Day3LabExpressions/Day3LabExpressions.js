//Anthony Hicks
//1 - 10 - 2015
//lab 3

//question 1

//variable
var slicePerPizza = 8;
var partyPopulation = 30;
var numberOfPizza = 20;


//calculation
var slicePerPerson = (numberOfPizza * slicePerPizza)/ partyPopulation;


//output

console.log(" each person had " + slicePerPerson + " slices to eat at the party ");


// question 1 part II

var totalSlices = slicePerPizza * numberOfPizza;
var sparkySlice = totalSlices%partyPopulation

console.log("Sparky got " + sparkyslice + " slices of pizza to eat");


//Question 2

//variables
var groceryWeek1 = 136;
var groceryWeek2 = 129;
var groceryWeek3 = 174;
var groceryWeek4 = 165;
var groceryWeek5 = 188;

//calculation
var totalGroceryBill = groceryWeek1+groceryWeek2+groceryWeek3+groceryWeek4+groceryWeek5;
var averageGroceryBill = (groceryWeek1+groceryWeek2+groceryWeek3+groceryWeek4+groceryWeek5)/5;


//output
console.log("You have spent total of " + "$" + totalGroceryBill + " on groceries over 5 weeks. That is an average of " + "$" + averageGroceryBill +  " per week " );

//Question 2 part 2

var originalPrice = 5000;
var discountPercentage = 65;
var descriptionOfItems = " sound system ";
var salesTax = 7;

var discountPrice = originalPrice * (discountPercentage/100);
var priceWithTax = discountPrice + discountPrice * (salesTax/100);
var priceWithoutTax = discountPrice;

//calculation

console.log(" Your " + descriptionOfItems + " was originally $" + originalPrice + " but after a discount % of " + discountPercentage +  " it is now $" + priceWithoutTax +  " without tax, and $" + priceWithTax +  " with tax ");