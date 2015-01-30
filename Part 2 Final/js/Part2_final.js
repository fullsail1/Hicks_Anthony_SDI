/*
Anthony Hicks
SDI Campus
1/27/2015
Part2_Final
 */
//alert("testing again");

//create variables cost and discount

var costItem = parseInt(prompt(" Please enter cost of item"));
//validate prompt

while (costItem ===""|| isNaN(costItem)){
       
        costItem = prompt("Please be sure to use numbers. No words are allowed\n Please re-enter cost of item");
        
}

var discount = parseInt(prompt(" Please enter discount %"));
//validate prompt

while (discount === ""|| isNaN(discount)|| discount <0 || discount >100){
        discount = prompt("Please be sure to use numbers. No words are allowed\n Please re-enter discount %");
        
}
//create function that calculates discount
function itemDiscount(costItem, discount) {
    //code
    var d = costItem*(discount/100);
    //variable "d" had to be created to catch the discount equation number (locally)
   
   var discountPrice = costItem - d;
   return discountPrice
}
actualCost = itemDiscount(costItem, discount)

//this to assure that we called the function correctly

console.log (actualCost)

//create output

console.log("The final cost of an item that costs $" + costItem + " with a discount of " + discount + "% is $" + actualCost + ". ")

//we used the costItem as $50; discount % of 20 and it tested true as the sale price to be $40