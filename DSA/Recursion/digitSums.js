// WAP to find the sum of digits of a number using recursion


let sum = (n) => {
    let s = 0 ;
    // let num = n.split('');
    return s + sum(n);

}

console.log(sum(234));