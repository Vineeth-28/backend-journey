const balance = 12000;
const amount = 2500;
const pinCorrect = true;

if (pinCorrect === true) {
    
    
    if (amount <= balance) {
        
        const remainingBalance = balance - amount; 
        
        console.log("Transaction Successful");
        console.log("Remaining Balance: " + remainingBalance);
    } else {
        console.log("Insufficient Balance");
    }

} else {
    console.log("Incorrect PIN");
}
