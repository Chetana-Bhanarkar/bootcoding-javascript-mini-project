// Write a program to print the sum of the even and odd integers ?

let integer = 10 ; 
let even = 0;
let odd = 0
for(let i = 0 ; i<=integer ; i++){
        if(i%2==0){
            even +=i;
        }
        else{
            odd += i;
        }
    }
    console.log(odd);
    console.log(even);

    //ODD :  1,3,5,7,9 = 25

    //EVEN :  2,4,6,8,10 = 30