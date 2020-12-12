function findPrime(limit) {
    const primes = [2];
    let i = primes.length === 1 ? 1 : primes[primes.length-1];
    main:
    while(primes.length < limit) {
        i += 2;
        for(let j = 0; j < primes.length; j++) {
            if(i % primes[j] === 0) continue main;
        }
        primes.push(i);
    }
    return [primes.pop(), primes.length];
}

console.log(findPrime(10001));