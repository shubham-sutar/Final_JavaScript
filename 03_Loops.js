
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
