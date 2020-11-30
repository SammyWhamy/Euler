let sumTotal = 0;
for(i = 0; i < 1000; i++) {
    console.log(`${i}: ${i%3 === 0 ? "fizz" : ""}${i%5 === 0 ? "buzz" : ""}`);
    if(i%5 === 0 || i%3 === 0) sumTotal+=i
}
console.log(`Total sum: ${sumTotal}`);