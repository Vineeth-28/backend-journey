
const Vote=15;
if(Vote <18){
    console.log("Not Eligible to Vote ")
}
else{
    console.log("Eligible to Vote")
}

const marks =100;

if(marks >=90){
    console.log("Grade A");
}
else if(marks >=75){
    console.log("Grade B");
}
else if(marks >=60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}


const product ={
    name:"Mechanical Keyboard",
    price:2999,
    inStock:true,
    quantity:10
};

if(!product.inStock){
    console.log("Out of Stock");
}
else if(product.quantity >5){
 console.log("Bulk order");
}
else{
    console.log("Order confirmed");
}