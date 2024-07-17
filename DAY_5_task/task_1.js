// Program to check entered no is even or odd and also find the square and square root of entered no

const prompt=require("prompt-sync")({sigint:true});

//---------------First-----------------(Check for no is odd or even)-----

function CheckOE(){                         // Function to check whether entered no is odd or even
    let no=+prompt("Please enter any no");
    if(no%2==0){
        console.log(`${no} no is Even`);
    }
    else{
        console.log(`${no} no is odd`);
    }
}

//-------------Second-------------------(Find square and square root of the entered no)

function SQ(){                                                      // Funnction to check for Square of any no
    let sq_no=+prompt("Enter a no to calculate square of that no");
    return sq_no**2;
}

function SQ_root(){                                                             // Function to check Square Root
    let sqroot_no=+prompt("Enter a no to calculate square root of that no");
    let ans=Math.sqrt(sqroot_no);                              // using pre-defined function (sqrt) from Math library
    return ans;
}

CheckOE();                                                  // Call for functions
console.log(`Square of entered no is : - ${SQ()}` );
console.log(`SquareRoot of entered no is : - ${SQ_root()}` );