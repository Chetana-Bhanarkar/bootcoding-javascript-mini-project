// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function arr(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i] || target < nums[i]) {
            return i;
        }
    }
    return nums.length;
}

console.log(arr([1, 2, 3, 4, 5], 7));

// for(let i=0; i<nums.length; i++){
//     if(target === nums[i] || target < nums[i]){
//         console.log("HOw are you?")
//         return i ;
//     }
// }
// return nums.length;