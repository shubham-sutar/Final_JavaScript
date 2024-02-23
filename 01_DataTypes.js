let myName = "Joker";
console.log(myName)

let num1 = 45;
let num2 = 45;
let result = num1 + num2;
console.log(`result of addition is ${result}`);
console.log(typeof(num1))

console.log(typeof Number(myName))

let isRaining = false;
let areYouAwesome = true;

console.log(isRaining)
console.log(typeof isRaining)

let day = null ;
if(day){
    console.log("truthy value")
} else{
    console.log("falsy value")
}

//parseInt and parseFloat 

const myString = "24";
const myNum = parseInt(myString); // int
console.log(myNum);
console.log(typeof myNum)

const myString1 = "24.56";
const myNum1 = parseFloat(myString1); // float
console.log(myNum1);
console.log(typeof myNum1)

console.log(isNaN(34))

result = "hello" / 2
console.log(result) 

result = 0.2 + 0.1
console.log(result) 