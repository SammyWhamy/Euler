function largestPrimeFactor(num) {
    let divisor = 2;
    while(num > 1) if(num % divisor === 0) num /= divisor; else divisor++;
    return divisor;
}

console.log(largestPrimeFactor(600851475143))