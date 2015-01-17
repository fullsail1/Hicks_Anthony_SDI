
 /*
Anthony Hicks
SDI Campus
1/15/2015
ternary
 */
//alert("testing again");

//if your GPA is greater than 2.0 you can graduate

 // condition to test ? true code:  false code

 //normal if else statement
 var gpa = 3.8;

 if(gpa> 2.0){

  console.log("congrat! you can gradute");

 }else{
  console.log("sorry, you GPA is too low!")


 }

 //decide what book a kid will read
 var age = 6;
 var book;

 //if the child is under 10 = they read green eggs and ham
 //read time machine

 book = (age<10)? "green eggs and ham": "the time machine";

 var book2 = (age<10) ? "green eggs and ham" : "the time machine" : "twilight" ;

 console.log("you should read" + book);
 console.log(book2);

