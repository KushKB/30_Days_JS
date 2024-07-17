// Write a program that takes person age and name and returns a greeting message 

let greeting_mess=(name,age=10)=>{      // Using default parameter
    if(age>=10){
     console.log(`Hello this is Kush from XYZ company .${name} we welcome you in our comapny and appreciate your interest`);
    }
}

greeting_mess("ABC");

// Program to make high order function
                                            // Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

                                            // higher order function
function higherOrderFunction(func){
    console.log('I am higher order function');
    func();
}

higherOrderFunction(callbackFunction);