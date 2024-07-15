// Program to check if a person is eligible to vote ( vote_age >= 18 )
const prompt=require("prompt-sync")({sigint:true})

const voting_age=+prompt("Enter your age: - ");

function vote(v_age){
    return v_age>=18?"Eligible to vote":"Not Eligible to vote";
}

console.log(vote(voting_age));