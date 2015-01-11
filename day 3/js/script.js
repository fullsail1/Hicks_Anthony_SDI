/*
ANTHONY HICKS
1/10/2015
DAY 3 CODING
 */

//SINGLE LINED COMMENT

//THIS IS AN ALERT
//alert ("TESTING TO SEE IF THIS IS CONNECTED!");


//Console.log - allows programmers to see information

console.log("this is the console");


// Declare a variable
// Use the keyword of var
var whatever1;  // Declaration of a variable
whatever1 = 42;  // this is defining a variable

console.log(whatever1);

// declare and define a variable

var a = 2;
console.log(a);

//simple math
a = a + 3;
console.log(a);

var b;
b = a + 3;
console.log(b);
console.log(a);

//find our age
var yearBorn = 1981;

//age is calculated by current year - year born
var currentYear = 2015;

var age = currentYear-yearBorn;
console.log(age);

//math
// +, - , *, /

//find area of triangle
//1/2 * base * height

var base = 4;
var height = 5;
var area = 1/2 * base * height;
console.log(area);

//modulo - %
//give remainder

var remainder = 98%5;
console.log(remainder);

//find if even or odd
// modulo by 2 %2
//1 if it odd
//0 if it even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//assignment operators

/*
= assignment
++ adds 1 to the variable
-- subtracts 1 from the variable
+= #(number) addition assignment
-=#(number) subtracts assignment
/=#(number) divides assignment
*=#(number) multiply assignment
 */

var counter = 1;
counter++; // counter = counter + 1;
console.log(counter);

counter--;// counter = counter - 1;
console.log(counter);

counter +=3; //counter = counter +3;
console.log(counter);

counter -=2; //counter = counter -2;
console.log(counter);

counter /= 2; //counter = counter /2;
console.log(counter);

counter *= 4; //counter = counter *4;
console.log(counter);

//string - is any text variable
//used to distinguish between variable name and random text


var kermit ="light green";
var frogName = "kermit";

console.log(frogName);

//double quote or single?

var phrase = "i don't fold";
console.log(phrase);

// multi-lines by using \n - new line character
var phrase2 = "he said i might quit \n i will not lose.";
console.log(phrase2);

//boolean
// kind of like a light (switch on or off)
//true or false - not "true" or "false"


var yes = true;

var nope= false;

//this is not a boolean
var wrong = "true";

//order of operations
//PEMDAS - please excuse my dear aunt sally
//parenthesis, exponents, multiplication, division, addition, subtraction



//find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//average - add them and divide how many there are
var average = (quiz1+quiz2+quiz3)/3;
console.log(average);

//do not overuse parenthesis
//var perimeter = length*2 + width*2;





















