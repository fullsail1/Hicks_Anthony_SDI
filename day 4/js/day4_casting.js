
 /*
Anthony Hicks
SDI Campus
1/13/2015
casting
 */
//alert("testing again");

//casting is using one variable as another variable type

var stringVar="6"
var results = 7 + stringVar;
console.log(results);


 //Number(variable or value to cast) - treats anything inside of the () as a number

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //string() - anything inside () is treated as a text string
 var areaCode = 407;
 var firstPart = 203;
 var secondPart = 1234;
 var phoneNumber= String(areaCode) + String(firstPart) + String(secondPart);
 console.log(phoneNumber);

 var phoneNumber2= "(" +String(areaCode)+ ")" + String(firstPart) + "-" + String(secondPart);
console.log(phoneNumber2);

 var phoneNumber= String(areaCode) + String(firstPart) + String(secondPart);


 //parse integers
 //parseInt() - it looks through a text string and returns an integer.
 //only the first number in the string is returned.
 //text string has to start with number
 //leading and trailing spaces are allowed
 //if it can't convert it or find the int it returns NaN (not a number)

 var b = parseInt("40 yrs old ");
 console.log(b );

 var c = parseInt("i am 40 yrs old ");
 console.log(c);

 var d = Number("i am 40 yrs old ");
 console.log(d);

 // prompts only return strings

 var shoeshad = prompt("what u had be foe");
 var shoeBought = prompt("what the rest of the number");

 var totalShoes = Nurmbe(shoeshad) + parseInt(shoeBought);
 console.log(totalShoes);
