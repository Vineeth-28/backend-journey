let marks = 90;

switch (true) {
    case (marks >= 90):
        console.log("Grade A");
        break;
    case (marks >= 80):
        console.log("Grade B");
        break;
    case (marks >= 70):
        console.log("Grade C");
        break;
    default:
        console.log("Grade F");
}


let num1 =10;
let num2 =13;
let operator ="+";
let result;

switch(operator){
    case '+':
        result =num1 +num2;
        break;
    case '-':
        result =num1-num2;
        break;
    case '*':
        result =num1 *num2;
        break;

    case '/':
        if(num2!==0){
            result =num1/num2;
        }
        else{
            result =" Error: Division by zero";
        }
        break;
        default:
            result ="Error : Invalid Operator"

} 
console.log(result);