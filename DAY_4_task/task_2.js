// Sum of Numbers
const prompt=require("prompt-sync")({sigint:true});
const no=+prompt("Enter any no to calculate the sum");

function SumNo(no){
    let sum=0;
    for(let i=1;i<=no;i++){
        sum +=i;
    }   
    return sum;
}

console.log(`Sum of no till ${no} numbers is :- ${SumNo(no)}`);

// print no with the help of do-while loop in reverse order

function Reverse(no){
    let i=no;
    do{
        console.log(i);
        i--;
    }while(i>0)
}
Reverse(no);