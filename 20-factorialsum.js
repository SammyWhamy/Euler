const num = 100n;
let sum = num;
for(let i = num-1n; i > 0n; i--) {
    sum*=i;
}
console.log(sum.toString().split("").map(BigInt).reduce((a,c) => a + c, 0n));