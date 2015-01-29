//alert("yup");


//99 bottles of beer on the wall

for(i=99; i>0; i--){
 
    //Add a check for the last round of beers
    if (i===1) {
     //code
     console.log(i + " bottles of beer on the wall." + i + " bottles of beer. you take    one down and pass it around, no more bottles of beer....leave!");
                
       }else{
         console.log(i + " bottles of beer on the wall."
                + i + " bottles of beer. you take one down and pass it around, " +
                (i -1 )+ " bottles of beer on the wall.");
       }
    
};