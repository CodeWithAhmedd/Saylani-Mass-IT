// Question 1
let orders = [1, 2, 3, 5];

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

let missingNumber = findMissingNumber(orders);
console.log("Missing number is:", missingNumber);