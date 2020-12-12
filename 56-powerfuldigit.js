const arr = [], arr2 = [];
for(let i = 1n; i <= 100; i++) {
    for(let j = 1n; j <= 100; j++) {
        const sum = i**j;
        arr.push(`I: ${i}, J: ${j} = ${sum.toString().split("").map(Number).reduce((a,c) => a + c, 0)}`);
        arr2.push(sum.toString().split("").map(Number).reduce((a,c) => a + c, 0));
    }
}
console.log(Math.max(...arr2));