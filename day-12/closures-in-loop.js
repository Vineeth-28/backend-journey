//var inside loop

for(var i =1 ; i<=3 ; i++){
    setTimeout(function exec (){
      console.log(i);
    },2000)
}


//let inside the loop

for(let i=1; i<=3; i++){
     setTimeout(function exec(){
        console.log(i);
    },3000)
}


// Fix var using Closure
// ======================================

for (var i = 1; i <= 3; i++) {

    (function (currentValue) {
        setTimeout(() => {
            console.log(currentValue);
        }, 1000);

    })(i);

}


for(var i=1 ; i<=3 ; i++){
    (function (currentValue){
        setTimeout(function exec (){
            console.log(currentValue * 10);
        })
    })(i);
}


for(let i=5 ; i<=7 ; i++){
    setTimeout(()=>{
        console.log(i)
    },500);
}


for (var i = 5; i <= 7; i++) {

    setTimeout(() => {

        console.log(i);

    }, 500);

}

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(`User ${i}`);
    }, 500);
}


// ======================================
// Interview Notes
// ======================================

// Why does var print 4 4 4?
// var is function-scoped.
// The loop creates only ONE variable.
// Every callback remembers the same variable.
// After the loop finishes, i becomes 4.


// Why does let print 1 2 3?
// let is block-scoped.
// JavaScript creates a new variable
// for every iteration.


// How do Closures fix var?
// We create another function.
// That function gets its own variable.
// Each callback remembers its own copy.


// Real Backend Usage
// - Background Jobs
// - Queue Processing
// - Event Handlers
// - Timers
// - Scheduled Tasks

// Common Interview Question
// Explain why
//
// 4
// 4
// 4
//
// happens.


// Key Takeaways
// 1. var shares one variable.
// 2. let creates a new variable every iteration.
// 3. Closures preserve values.
// 4. IIFE can fix var loop issues.
// 5. Modern JavaScript prefers let.