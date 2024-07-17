// Function to find maxi of two number and also function to concat two string

const prompt=require("prompt-sync")({sigint:true});

//---------------First----------------(Find maxi of two no)

function MaxiTwo(){
    let F_no=+prompt("Enter First no to check for maximum");
    let S_no=+prompt("Enter Second no to check for maximum");
    let ans=Math.maxi(F_no,S_no);
    return ans;
}

function ConcatStr(){
    let InpStrOne=prompt("Enter first string: - ");
    let InpStrTwo=prompt("Enter Second string: - ");
    let InpStrCombined=InpStrOne+InpStrTwo;
    let secondMethod=InpStrOne.concat(" ",InpStrTwo," Fruit"," Second Fruit");
    console.log(`This is first method for concat a string: -  ${InpStrCombined}`);
    console.log(`This is Second method for concat a string: -  ${secondMethod}`);

}

ConcatStr();