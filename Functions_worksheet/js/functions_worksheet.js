 /*
Anthony Hicks
SDI Campus
1/22/2015
functions worksheet
 */
//alert("testing again");

//create function
//car lot wants to know how much the daily rental take is

//think about it......



function dailyTake(cf, rf )
{//cars rented , rental fee
    var cf =parseInt(prompt("Please enter daily rental tally sheet"));;
    var rf = parseInt(prompt("enter you rental payment"));

    var take;
    
    take = cf * rf //calculation
    //meaningful output
    console.log("the daily take a the lot down 4th st. is " + take + " dollars");
    
    
    
    
}

dailyTake(198, 60 );//call your function and insert the arguments

//prompt user



dailyTake(120,60);
dailyTake(290,86);