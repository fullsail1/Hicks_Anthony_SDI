 /*
Anthony Hicks
SDI Campus
1/20/2015
Conditional Assignment
 */
//alert("testing again");

 //Soldier promotion point system

 //variables

 var awards;
 var ptTest;
 var weaponsQual;
 var cutoffScore =200;
 var totalPoints;
 var promoPointCalculator = [ ];


 // calculate points

//enter PT score

ptTest = parseInt(prompt(" enter pt score here: " ));//prompt1

while(isNaN(ptTest)){
    ptTest=parseInt(prompt("Please enter a value. You cannot leave blank"));

  }
    if  (ptTest<0||ptTest>=301){
    //logical operator
     ptTest=parseInt(prompt(" INVALID SCORE!! MUST BE 0 - 300 ONLY!! "))
      console.log(" pt test score = " + ptTest);

     } else if(ptTest>=180 ) { //ternary1



      //test output of ptTest
      console.log("Soldier has passing pt test score = " + ptTest);

    }else// (ptTest<180)

           console.log(" soldier has a non passing pt score = " + ptTest + " Soldier with failing PT Test cannot go forward to the Promotion board per AR 600-200");



 //assign raw score to calculator and test output
promoPointCalculator[0] = ptTest;

 console.log(promoPointCalculator);

 //

 //enter awards score
 //we will assume that points have been tallied

 awards = parseInt(prompt(" enter award score here: " ));//prompt2

 while(isNaN(awards)){
     awards=parseInt(prompt("Please enter a value. You cannot leave blank"));
 }

if (awards > 201||awards<0 ){
    awards=parseInt(prompt(" Score entered invalid please re enter."))


 }else{
     console.log(" The points from awards =  " + awards);
 }
 //add awards value to array and check out put.

promoPointCalculator[1]=awards;
 console.log(promoPointCalculator);

 //weapons
 weaponsQual = parseInt(prompt(" enter weaponsQual score here: " ));//prompt 3
 while (isNaN(weaponsQual) ||weaponsQual > 41|| weaponsQual<0) { // ternary 2
     weaponsQual = parseInt(prompt("invalid number please re enter " + " number must be between 0 - 40 "));
     //check to see if weapon score is saved

 }
     //add weaponsQual value to array and check out put.
 console.log(" The points from weaponsQual =  " + weaponsQual);
     promoPointCalculator[2]=weaponsQual;
     console.log(promoPointCalculator);



//grand finale

 //tally totalPoints
promoPointCalculator[0] = promoPointCalculator[0]/3;
 promoPointCalculator[1]= promoPointCalculator[1]
totalPoints = promoPointCalculator[0]+promoPointCalculator[1]+promoPointCalculator[3];


console.log(" soldier meets minimum " +  totalPoints + " for promotion. Send to board "
console.log("soldier does not meet minimum " + totalPoints + " for promotion"
/*
 var ptProfile;
 console.log(ptProfile)
 ptProfile = confirm("does soldier have profile? " + " press ok for true an cancel for false");


 //Soldier could have profile which can alter score due to inability to complete an event.
 //prompt for profile

 ptProfile = confirm("does soldier have profile? " + " press ok for true an cancel for false");

 //when prompted

 }
 if(ptProfile === true){

 console.log(" Records indicate soldier profile status = " + ptProfile + " Thus pt test score will be accessed." );


