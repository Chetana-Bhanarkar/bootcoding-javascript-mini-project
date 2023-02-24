
let maxWealth = function (accounts) {
    let max = 0
    for (let i = 0; i < accounts.length; i++) {
        let temp = 0
        for (let j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

console.log(maxWealth([[1,2,3],[3,2,1]]));
