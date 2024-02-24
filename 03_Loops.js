
console.log("Print 1 to 20 Numbers - ")
for( let i = 1; i<= 20; i++ ){
    console.log(i);
}

let i = 20;
while( i >= 1){
    console.log(i)
    i--;
}

do{
    console.log(i);
    i++;
}while(i <= 5);

let myArr = [12,34,56,78,23,12]

myArr.forEach(myFun)

function myFun(items){
    console.log(items);
}

num = 5

for(let i = 1; i<=10; i++){
    console.log(`${i} x ${num} = ${num * i} `);
}

let userInput;


// do{
//     userInput = prompt(`Enter any positive number`)

// }while(isNaN(userInput) || userInput<0)
// console.log("you entered num is positive");

let sum  = 0;

for(let i = 0 ; i<=10; i++){
    sum = sum + i
}

console.log(sum)

num = 14;
isPrime = true;

for(let i = 2; i < num; i++)
{
    if(num % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("Num is prime")
}else{
    console.log("Num is not Prime")
}

for(let i = 1; i<10; i++)
{
    let pattern = "";

    for(let j = 1; j<= i; j++)
    {
        pattern = pattern + "*"
        
    }
    console.log(pattern)
}