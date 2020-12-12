function fizzbuzzSum(limit) {
    let sumTotal = 0;
    for(i = 0; i < limit; i++) {
        if(i%5 === 0 || i%3 === 0) sumTotal+=i;
    }
    return sumTotal;
}

console.log(`Total sum: ${fizzbuzzSum(1000)}`);