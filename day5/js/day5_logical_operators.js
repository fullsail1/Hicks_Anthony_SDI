
 /*
Anthony Hicks
SDI Campus
1/15/2015
Logical Operators
 */
//alert("testing again");

/*
true&&true = true
true&&false= false
false&&true= false
false&&false=false

true||true = true
true||false= true
false||true = true
false||false = false

!true = false
!false = true


 */

 // if the price of 3ds is less than budget lets buy it
 //and if our paycheck is over 500 dollars

 var budget = 100;
 var dsPrice = 169;
 var paycheck = 600;

 if(dsPrice<budget && paycheck > 500){
  console.log("Buy the 3ds");


 }else{
  console.log("Do not buy, save a little more");
 }


 var tvPrice = 540;
 var tvBudget = 500;
 var wonLottery = false;

 if(tvPrice>tvBudget||wonLottery){
  console.log("lets go buy tv");

 }else{
  console.log("stick with your small tv!");

 }