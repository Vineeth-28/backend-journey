// ================================
// Basic Closure Example
// ================================



function outer(){
    let count =0;
    return function (){
        count ++;
        console.log(count);
    };

}
const counter =outer();
counter();
counter();
counter();

//expected output:
//1
//2
//3

//why ?
//the inner function remembers the variable count 
//even after the outer() has finished executing 


function createUser(username){
  
    return function(){
        console.log(username);
    };
}

const user1= createUser("aman");
const user2 =createUser("vineet");
user1();
user2();
user1();