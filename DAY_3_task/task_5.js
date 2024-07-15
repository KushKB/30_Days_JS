// Program to check for leap year

const prompt=require("prompt-sync")({sigint:true})
const year=+prompt("Enter year to check for leap year or not : - ");       // user input

function Leap(year){
    if(year %400 ==0){
        console.log(`${year} is leap year`);
    }
    else if(year % 4 == 0 && year % 100 != 0){
        console.log(`${year} is leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
}

Leap(year);                                     // Function called