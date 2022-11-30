// WAP to sum of numbers from 1 to n using recursion


const sum = (n) => {
   if(n===1){
        return 1;
   }
   return n + sum(n-1)
}

console.log(sum(10));