// Program to check whether no is +ve, -ve or zero 

const prompt=require("prompt-sync")({sigint:true}); 
const no=+prompt("Enter no to check , the no is +ve, -ve or zero");

function Check(no){
    return no>0?'Entered no is positive':(no==0)?'Entered no is zero':'Entered no is negative';
}
console.log(Check(no));