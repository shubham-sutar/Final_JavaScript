

function add(num1,num2){
    let result = num1 + num2;
    console.log(`result of addition ${result}`)
}

add(50,2);

function sub(num1,num2){
    return num1 - num2;
}

console.log(sub(25,5));

function greet(myName){
    console.log(`Hello ${myName} , Welcome to the Dr. D. Y. Patil college of Engineering`);
}

greet("shubham")
greet("Tushar")

//anonymouse function

let state = function(){
    console.log("hello world");
}
state();


// IIFE Immediately invoke function

var result = (state = function(){
    console.log("This is javascript");
})();