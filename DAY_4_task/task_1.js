// Program to print no form 1 to n and printing table of entered no

const prompt=require("prompt-sync")({sigint:true})

//-----------First------------------(Print 1 to n)

const no=+prompt("Enter no till your want to print no");
function P_Number(no){
    for(let i=1;i<=no;i++){
        console.log(i);
    }
}
P_Number(no);
//---------Second------------------(Table)

function Table(no){
    for(let i=1;i<=no;i++){
        console.log(`${no} x ${i}=${no*i}`);
    }
}
Table(no);