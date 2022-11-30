// WAP to print the array elements using recursion

let a = [1, 2, 3, 4, 5];
const reverse = (a, i)=> {
    if (i === a.length) {
        return;
    }

    console.log(a[i]);

    reverse(a,i+1);
}

reverse(a,0);