let previous = 0n, current = 1n, index = 0n;
while(current.toString().split("").length < 1001) {
    index++;
    console.log(`Digits of F${index}: ${current.toString().split("").length}`);
    let newCurrent = current+previous;
    previous = current;
    current = newCurrent;
    if(index === 4786n) console.log(current);
}