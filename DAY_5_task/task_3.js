// Program to make arrow function and return sum of two numbers and also a program to check 
//whether program will contain that specific character in that string or not.

const prompt=require("prompt-sync")({sigint:true});


const f_no=+prompt("Enter first no :- ");
const s_no=+prompt("Enter second no :- ");
const SumOfTwo=(one,two)=>{
    return one+two;
}

console.log("Sum of entered two no is:- "+SumOfTwo(f_no,s_no));


// --------------Second------------------(To check whether specific chara is present or not)

const InptStr=prompt("Enter String");
let ans=InptStr.search(/o/);

console.log(ans);           // If entered specific will not be present , it will return -1 
                            //else will return index of that element at which it will be present
if(ans>0){
    console.log("Specific character is present");
}
else{
    console.log("Specific character is not present");
}