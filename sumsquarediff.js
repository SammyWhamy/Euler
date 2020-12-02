let squareSum = 0;
let sumSquared = 0;
for(let i = 1; i <= 100; i++) {
    squareSum+=i**2;
    sumSquared+=i;
}
sumSquared**=2;
console.log(sumSquared - squareSum)