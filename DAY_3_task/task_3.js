// Writing a program to find the largest of three no
const prompt=require("prompt-sync")({sigint:true});

const first=+prompt("Enter first no");
const sec=+prompt("Enter second no");
const third=+prompt("Enter third no");

function Largest_find(first,sec,third){
    return (first>sec)&&(first>third)?
    `${first} greatest no`:(sec>third)?
    `${sec} is greatest`:
    `${third} is greatest`;
}

console.log(Largest_find(first,sec,third));