// Write a program to find Greatest Common Divisor (GCD), Factor (GCF) or Highest Common 
// Factor (HCF) of two numbers

let hcf;
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

for(let i=1 ; i<= number1 && i<= number2 ; i++){
    if(number1 % i == 0 && number2 % i == 0){
        hcf = i ;
    }
}
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`)