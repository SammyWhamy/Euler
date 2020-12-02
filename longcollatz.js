const iterationsList = [];

for(let i = 1; i <= 1000000; i++) {
    let num = i;
    let iterations = 1;
    while(num !== 1) {
        if(num%2 === 0) {
            num/=2;
        } else {
            num = (num*3)+1;
        }
        iterations++;
    }
    iterations++;
    if(!iterationsList[0]) {
        iterationsList.push({start: i, iterations: iterations});
    } else if(iterationsList[iterationsList.length - 1].iterations < iterations) {
        iterationsList.push({start: i, iterations: iterations});
    }
}


console.log(iterationsList)
// console.log(Math.max(...iterationsList));