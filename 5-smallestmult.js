function smallestMult(start, end) {
    let num = 1;
    while(true) {
        let divisible = 0;
        for(let i = start; i <= end; i++) {
            if(num%i === 0) divisible++;
        }
        if(divisible === end) return num; else num++;
    }
}

console.log(smallestMult(1, 20));