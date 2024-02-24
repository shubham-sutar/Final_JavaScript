const sum = function myFun(num1, num2){
    return num1 + num2
}

console.log(sum(23,25)) ;

const myName = (fname,lname) => {
    console.log(`My name is ${fname + lname}`)
}

myName("shubham"," sutar")

// function calc(num1,num2,opr){
//     let result;
//     switch(opr){
//         case "+" :
//             return num1 + num2;
//         case "-" :
//             return num1 - num2;
//         case "*" :
//             return num1 * num2;
//     }
// }

let calc = (num1,num2,opr) =>{
    switch(opr)
    {
        case '+' :
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default : 
            console.log("invalid");
    }

}

let result = calc(25,5,"/");
console.log(result);

//reverse string

let revers = (str) => {

    let mystr = "";
    for(let i = str.length-1; i>=0; i--)
    {
        mystr = mystr + str[i];
    }
    return mystr;
}

console.log(revers("azru"));

// Palindrome String

let palindrome = (str) => {

    let mystr = "";
    for(let i = str.length-1; i>=0; i--)
    {
        mystr = mystr + str[i];
    }
    //return mystr;

    if (str == mystr){
        return true
    }
    else{
        return false
    }
}

console.log(palindrome("level"));