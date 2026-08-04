// Basic closure 

function outer(){
    let count = 6;
    return function(){
        console.log(count);
    }
}
const fn = outer();
fn();

// Exercise 2

function counter(){
    let count = 0;
    return function(){
        count ++;
        console.log(count);
    }
}

const c = counter();
c();
c();
c();
c();

// Exercise 3

function counter2(){
    let count = 0;
    return function(){
        count ++;
        console.log(count);
    }
}

const a = counter2();
const b = counter2();

a();
a();
b();
a();
b();

// Exercise 4 Function factory

function multiply(multiplier){
    return function(number){
        return number * multiplier;
    }
}
const double = multiply(2);
const triple = multiply(3);
console.log(double(8));
console.log(triple(8));

// Exercise 5
// Private variable

function bank(){
    let balance = 3000;
    return {
        getBalance(){
            return balance;
        }
    }
}

const account = bank();
console.log(account.getBalance());
account.balance = 50000;
console.log(account.getBalance());


//Exercise 6 Var
for(var i =1; i<=3 ; i++){
    setTimeout( () => {
        console.log(i);
    } ,0  )
}

//Exercise 7 let

for(let i =0 ; i<=3 ; i++){
    setTimeout( () =>{
        console.log(i);
     } ,0)
}


//Exercise 8
//Session


function createSession() {
    let loggedIn = false;
    return {
        login() {
            loggedIn = true;
        },
        status() {
            console.log(loggedIn);
        }
    };
}

const user = createSession();
user.status();
user.login();
user.status();

//Exercise 9
//Api key


function api() {
    let key = "abc";
    return {
        validate(input) {
            return input === key;
        }
    };

}
const manager = api();
console.log(manager.validate("abc"));
console.log(manager.validate("xyz"));

//Exercise 10
//Nested closure 

function outerNest(){
    let x =1;
    return function (){
        x++;
        return function(){
            console.log(x);
        };
    };
} 
const aNest = outerNest();
const bNest = aNest();
bNest();


function shoppingCart(){
    let item = 0;

    function additem (){
      item++;
      console.log(item);
    }
    function removeItem(){
       if(item == 0) console.log(item);
       else {
         item--;
         console.log(item);
       }
    }
    function showItem(){
        console.log(item);
    }

    return {
        additem: additem,
        removeItem: removeItem,
        showItem: showItem
    };
}

const cart = shoppingCart();
console.log(cart.additem); 
cart.additem();           
cart.removeItem();      
cart.showItem();   


// ===============================================
// Interview Notes
// ===============================================

// 1. What is a Closure?

// 2. Why are Closures useful?

// 3. Difference between Scope and Closure.

// 4. Difference between var and let.

// 5. What are Private Variables?

// 6. What is Encapsulation?

// 7. What is a Function Factory?

// 8. Give three real backend uses of Closures.

// ===============================================
// Day 12 Revision Complete
// ===============================================
