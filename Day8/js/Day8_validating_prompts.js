 /*
Anthony Hicks
SDI Campus
1/13/2015
Prompting
 */
alert("testing again");

//user leaves it blank?
//returns an empty text string
var movie = prompt("please don't leave this blank. \nwhat is your favorite movie?");

var ticketPrice = prompt("how much is a movie ticket?");
//user did not type in a number
//reprompt for number

ticketPrice=prompt("please type in a number. \nwhat is the cost of a movie ticket?");

}


//use both validation in the same while loop
var age = prompt("to get into R rated movies, we must know your age.  \nhow old are you?");

//validate that the prompt is not blank ans is a number

while(isNaN(age) || age===""){
    //the user typed in a text string or left it blank
    console.log("inside of while loop");
    //test to see what went wrong
    if (isNan(age)){
    age=prompt("please only use number!\nhow old are you?");
    }else{
    age=prompt9"please do not leave blank!\nwhat is your age?");
    }
}

//validate something specific
var movieGenre = prompt("do you want to see any action movie or comedy?");

//validate that the user typed in one of the 2 genres

//change to lower case
movieGenre = movieGenre.tolowerCase();

while (movieGenre !="action" && movieGenre !="comedy"){
    movie=prompt("only type in comedy or action. what genre do you wanna watch?");
    

}