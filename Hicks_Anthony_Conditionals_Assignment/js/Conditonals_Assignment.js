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
 var cutoffScore =170;
 var rawScore;
 var totalPoints;
 var promoPointCalculator = [ ];
 var ps;


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

     } else if(ptTest>=180 ) {



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
 while (isNaN(weaponsQual) ||weaponsQual > 41|| weaponsQual<0) {
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
 promoPointCalculator[1]= promoPointCalculator[1]*.5;
 promoPointCalculator[2]= promoPointCalculator[2]*2.5;
rawScore = promoPointCalculator[0]+promoPointCalculator[1]+promoPointCalculator[2];
 //we want the raw score to be rounded to the nearest number
console.log(Math.round(rawScore.toFixed(2)));

//total points = the rounded raw score
 totalPoints = Math.round(rawScore.toFixed(2));
 rawScore=totalPoints;

 console.log(promoPointCalculator);

 //test total points output
 console.log(totalPoints);

 //checking my score going into the ternary 1 as a check
 console.log(rawScore);
 console.log(cutoffScore);



  ps  = (totalPoints>cutoffScore) ? //ternary 1


" soldier meets minimum cutoff score  = " +  cutoffScore + " by scoring "+totalPoints + " for promotion. Send to board "

:
 "soldier does not meet minimum cutoff score = " + cutoffScore + " by scoring " + totalPoints + " for promotion";

 console.log(ps);


 //testing my code

 // I put in the following scores ptTest = 276; awards = 165; weapQual = 26

 // scores were stored in promoPointCalculator as 276, 165, 26
 //these scores are further broken down into raw scores as they have to be converted to a 0 -100 scale
 //raw scores are 92, 82.5, 65 note the array fields convert the scores to raw numbers
 //raw score is tallied the rounded to the nearest whole number
 //raw score feeds the totalPoints variable
 //the totalPoints variable is set against the cutoffScore
 //if totalPoints <cutoffScore..no promote; if totalPoints>cutoffScore...promote!
