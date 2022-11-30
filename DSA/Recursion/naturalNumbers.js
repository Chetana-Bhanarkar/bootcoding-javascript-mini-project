// WAP to print first 50 natural numbers using recursion (1,2,3,4....)

function naturalNums(n){
    
   console.log(n);

   let newN = n+1;

   if(newN <= 50){
       naturalNums(newN);
   }
}

console.log(naturalNums(1));
