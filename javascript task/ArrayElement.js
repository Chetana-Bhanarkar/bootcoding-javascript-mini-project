const Maximum = (n) => {
    let max = n[0];
    for(let i=1 ; i<n.length ; i++){
        if(n[i] > max){
            max = n[i]
        }
    }
    return max
};

console.log(Maximum([2,3,14,1,7]));


const Minimum = (a) => {
    let min = a[0];
    for(let i=1 ; i<a.length ; i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min
};

console.log(Minimum([13,19,8,0,1]));



let average = (n) => {
    let sum = 0;
    let length = n.length;
    for(let i=0 ; i<n.length ; i++){
        sum += n[i];
    }
    return sum/length;
}

console.log(average([13,19,8,0,1]));


let Reversing = (array) => {
    let reverse = array.reverse()

    return reverse;
}

console.log(Reversing([13,19,8,0,1,2]));

