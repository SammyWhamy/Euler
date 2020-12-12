function sumsquareDiff(limit) {
    let squareSum = 0;
    let sumSquared = 0;
    for(let i = 1; i <= limit; i++) {
        squareSum+=i**2;
        sumSquared+=i;
    }
    sumSquared**=2;
    return sumSquared - squareSum;
}

console.log(sumsquareDiff(100));