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
 var educationPoints;
 var totalPoints;
 var promoPointCalculator = [ ];
 var ptProfile;

 // calculate points

//enter PT score

ptTest = parseInt(prompt(" enter pt score here: " ));//prompt1

while(ptTest=== " "){
  console.log("Please enter a value. You cannot leave blank");
  }


if(ptTest>=180 ) //ternary {

    //test out put of ptTest
    console.log(" pt test score = " + ptTest);

    }else if(ptTest<180) {


    ptProfile = confirm("does soldier have profile? " + " press ok for true an cancel for false");
    //when prompted

}
       if(ptProfile === false){

           console.log("Soldier with failing PT Test cannot go forward to the Promotion board per AR 600-200");



       }else{
           console.log(" Records indicate soldier profile status = " + ptProfile + " Thus pt test score will be accessed." );

       }
 //assign raw score to calculator and test output
promoPointCalculator[0] = ptTest;

 console.log(promoPointCalculator);

 //

 //enter awards score
 //we will assume that points have been tallied

 awards = parseInt(prompt(" enter award score here: " ));//prompt2

 while(awards === "  "){
     console.log("Please enter a value. You cannot leave blank");
 }

if (awards===" "){
 console.log("invalid number please re enter");

 }else if (awards > 201||awards<0 ){
     console.log("invalid number please re enter");

 }else{
     console.log(" The points from awards =  " + awards);
 }
 //add awards value to array and check out put.

promoPointCalculator[1]=awards;
 console.log(promoPointCalculator);

 //weapons
 weaponsQual = parseInt(prompt(" enter weaponsQual score here: " ));//prompt 3
 if (weaponsQual===" "){
     console.log("invalid number please re enter");

 }else if (weaponsQual > 41|| weaponsQual<0 ){
     console.log("invalid number please re enter");

 }else{
     console.log(" The points from weaponsQual =  " + weaponsQual);
 }
 //add weaponsQual value to array and check out put.
promoPointCalculator[2]=weaponsQual;
 console.log(promoPointCalculator);



 /*

//
// console.log("Soldier with failing PT Test cannot go forward to the Promotion board per AR 600-200");
}

/*
/*
}else if{

var ptProfile = true;
console.log(

}else if {




}




console.log( "soldier points are as follows : " + promoArray );





console.log(" soldier meets minimum " +  totalPoints + " for promotion. Send to board "
console.log("soldier does not meet minimum " + totalPoints + " for promotion"
*/
