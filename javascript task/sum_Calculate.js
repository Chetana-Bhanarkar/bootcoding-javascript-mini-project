// Write a program to calculate the sum of following series where n is input by user. 
// 1 + 1/2 + 1/3 + 1/4 + 1/5 +............1/n 


let n = parseInt(prompt('Enter the positve number :'))
let sum = 1;

for(let i =2 ; i<=n ; i++){
    sum += 1/i;
}

console.log(sum);

