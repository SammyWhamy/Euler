let previous = 0, current = 1, sum = 0;
while(current < 4000000) {
    console.log(current);
    if(current%2 === 0) sum+=current;
    let newCurrent = current+previous;
    previous = current;
    current = newCurrent;
}
console.log(`Sum: ${sum}`);