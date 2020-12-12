function palindromeProduct(limit) {
    let largest = 0;
    for(let i = 1; i < limit; i++) {
        for(let j = 1; j < limit; j++) {
            const num = i*j;
            if(isPalindrome(num) && num > largest) largest = num;
        }
    }
    return largest;
}

function isPalindrome(num) {
    const str = num.toString();
    const revstr = [...str].reverse().join("");
    return str === revstr;
}

console.log(palindromeProduct(1000));