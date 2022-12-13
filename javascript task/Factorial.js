// Write a program to find the factorial of n, n-1, n-2, n-3, n-4 ?

// let n = 12 ; 
// let fact =1;
// for(let i = (n-4) ; i <= n ; i++){
//     fact = fact * i ; 
// }

// console.log(fact);
const method = () => {
    let n = 12 ;
    for(let i= (n-4); i<=n ; i++){
        fact();
    }
}

const fact = () =>{
    let n; 
    if ( n <=0 ){
        console.log('number should not be zero');
    }
    else{
        let fact = 1;
        for(let i = 1 ; i<=n ; i++){
            fact = fact * i ;
        }
        return (`${n} : ${fact}`);
    }
}

console.log(method());