// Program to show the working of Continue and Break

const prompt=require("prompt-sync")({sigint:true});
let cont_no=+prompt("Enter a no which you want to miss");

function ContiProg(cont_no){
    for(let i=1;i<=10;i++){
        if(i==cont_no){
            continue;
        }
        else{
            console.log(i);
        }
    }
}
ContiProg(cont_no);

let break_no=+prompt("Enter a no which you want to break");
function BreakProg(no){
    for(let i=1;i<=10;i++){
        if(i!=no){
            console.log(i);
        }
        else{
            break;
        }
    }
}   
BreakProg(break_no);