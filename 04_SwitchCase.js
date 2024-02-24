
let num = 3;

switch(num){
    case 1 : 
    console.log("Your lucky");
    break;

    case 2 : 
    console.log("Your Awesome");
    break;

    case 3 : 
    console.log("Youre Crazy");
    break;

    case 4 : 
    console.log("Your Gentleman");
    break;

    case 5 :
    console.log("Youre Genius");
    break;

    default :
    console.log("Invalid Number")
}

let shape = "rectangle";

let w = 15;

let l = 6;
let r = 4;
let result;

switch (shape)
{
    case "square" :
    result =  l * l;
    console.log(`Area of sqare is ${result}`);
    break;

    case "circle" :
    result = 3.14 * (r * r);
    console.log(`Area of circle is ${result}`);
    break;

    case "rectangle" : 
    result = l * w;
    console.log(`Area of rectangle is ${result}`);
    break;

    default :
    console.log("Shape Not Available");
    break;
     
}