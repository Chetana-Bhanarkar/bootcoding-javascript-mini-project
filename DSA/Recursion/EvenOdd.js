// WAP to print even or odd numbers in given range using recursion

function evenOrOdd(num) {
  if(num%2 === 0) {
    return "Even";
  } else if(num%2 !=0) {
    return "Odd";
  } else {
    return evenOrOdd(num - 2);
  }
}

function evenOrOddInRange(start, end) {
  for(let i = start; i <= end; i++) {
    console.log(`${i} is ${evenOrOdd(i)}`);
  }
}

evenOrOddInRange(1, 10);