// Write a program to print out all Armstrong numbers between 1 and 500. If sum of cubes of 
// each digit of the number is equal to the number itself, then the number is called an Armstrong 
// number.

// For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 )


for (let i =1; i <= 500; i++) {
    let temp = i;
    let rem;
    let sum = 0

    while (temp > 0) {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = temp / 10;
    }

    if (sum === temp) {
        console.log(`${sum}`);
    }
    else{
        // console.log('no an armstrong number');
    }
}

console.log('hello');

