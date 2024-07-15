// Program that uses switch case to determine the day of the week based on a no(1-7)
const prompt=require("prompt-sync")({sigint:true});

const no=+prompt("Enter a no between 1 to 7: - ");
function Weak(no){
    switch(no){
        case 1:
                console.log("This is Monday");
                break;
        case 2:
                console.log("This is Tuesday");
                break; 
        case 3:
                console.log("This is Wednesday");
                break;
        case 4:
                console.log("This is Thursday");
                break;
        case 5:
                console.log("This is Friday");
                break;
        case 6:
                console.log("This is Saturday");
                break;
        case 7:
                console.log("This is Sunday");
                break;
        default:
                console.log("Something went wrong");
                break;

    }
}

Weak(no);               // Function called