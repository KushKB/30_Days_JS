const prompt=require("prompt-sync")({sigint:true}); 
let input_no=+prompt("Enter first no");
let input_sec_no=+prompt("Enter second no");

function Add(fir,sec){                          // use of '+=' operator
    let sum=0;
    sum +=fir;
    sum+=sec;
    return sum;
}

function Sub(fir,sec){                          // use of ternary operator
    return (fir>=sec)?(fir-sec) :(sec-fir);
}

function Multi(fir,sec){                        // use of logical operator
    if(fir==0 && sec>=0){
        return 0;
    }
    else{
        let mul=fir*sec;
        return mul;
    }
}

function Divi(fir,sec){
    let div=fir/sec;
    return div;
}

function Rema(fir,sec){
    let rem=fir%sec;
    return rem;
}

console.log("Sum of two no: "+Add(input_no,input_sec_no));
console.log("Sub of two no: "+Sub(input_no,input_sec_no));
console.log("Multi of two no: "+Multi(input_no,input_sec_no));
console.log("Divi of two no: "+Divi(input_no,input_sec_no));
console.log("Remainder: "+Rema(input_no,input_sec_no));