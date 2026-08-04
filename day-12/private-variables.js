

function createCounter(){
    let count =0;
    return {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        },
        getCount(){
            return count ;
        }
    };
}

const counter=createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());


//private bank account

function createBankAccount(initialBalance){
    let balance = initialBalance;
    return {
        deposit(amount){
            balance +=amount;
            console.log(balance);

        },
        withdraw(amount){
            balance -=amount;
            console.log(balance)

        },
        getBalance(){
          console.log(balance);

        },
    };

}
const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(300);


//password manager
function passwordManager() {
    let password = "test@123";
    
    return {
        changepassword(newPassword) {
            password = newPassword; 
            return "Password Updated";
        },
        showpassword() {
            return password; 
        }
    };
}



const password = passwordManager();
console.log(password.showpassword());
console.log(password.changepassword());

// ======================================
// Interview Notes
// ======================================

// What are Private Variables?
// Private variables are variables that cannot be accessed
// directly from outside the function.
// They are only accessible through the returned methods.


// Why are Closures used for Private Variables?
// Closures allow functions to remember variables even after
// the outer function has finished execution.
// This makes it possible to hide data from external access.


// Encapsulation
// Encapsulation means hiding internal implementation details
// and exposing only the necessary functionality.


// Real Backend Examples
// - User Sessions
// - Shopping Cart
// - JWT Token Storage
// - API Rate Limiting
// - Database Connection State


// Key Takeaways
// 1. Closures provide private state.
// 2. Outside code cannot directly modify private variables.
// 3. Methods act as the only way to interact with private data.
// 4. This improves security and maintainability.