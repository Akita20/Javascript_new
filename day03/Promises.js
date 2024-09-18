
let checkEligibleToVote = (age) => { 
    return new Promise((resolve, reject) => {
        if(age >= 18){
            resolve('Eligible to vote');
        } else {
            reject('Not eligible to vote');
        }
    });

}


checkEligibleToVote(17)
   .then((message) => {
        console.log("You can vote for the first time");
    })
    .catch((message) => {
        console.log("You can't vote Today");
    });

    /*
    Promisess can help us avoid using:
    Nested callbacks
    Callback Hell
    */
