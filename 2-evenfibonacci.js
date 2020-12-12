function fibonacciSum(limit) {
    let previous = 0, current = 1, sum = 0;
    while(current < limit) {
        if(current%2 === 0) sum+=current;
        let newCurrent = current+previous;
        previous = current;
        current = newCurrent;
    }
    return sum;
}

console.log(`Sum: ${fibonacciSum(4000000)}`);