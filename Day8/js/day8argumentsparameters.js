








//must have the same number of argument and parameters...usually


//create a function to calculate the area of a rectangle

function calcArea(){ // parameters go here
    
    var width = 10
    var height = 20;
    var area = width*height;
    
    
    console.log("the area is " + area);
    
}

//function call
calcArea();

function calcArea(w,h) {// parameters inserted
    
    //code
    var area = w*h;
     console.log("the area is " + area);
}
calcArea(10,20);