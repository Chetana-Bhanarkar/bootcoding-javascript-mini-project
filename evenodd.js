const evenodd = () => {
    let a = 39;
    if(a%2 == 0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
};

evenodd();

const factorial = () => {
   let fact = 1;
   for(let i=1; i<=10; i++){
        fact = fact*i
   };
   console.log(fact);

};

factorial();

// function myfunc(){
//     console.log('functin declaration');
// };

// myfunc();

// const myfunc2 = function(){
//     console.log("function expression");
// };

// myfunc2();

// const myfunc3 = () => {
//     console.log('Arrow function');
// };

// myfunc3();

// let name = prompt("enter your name");
// console.log(name);