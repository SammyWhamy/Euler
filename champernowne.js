let num = "0.";

for(let i = 1; i <= 200000; i ++) {
    num+=i.toString();
}

const arr = num.split("");
console.log(parseInt(arr[1+1]) * parseInt(arr[10+1]) * parseInt(arr[100+1]) * parseInt(arr[1000+1]) * parseInt(arr[10000+1]) * parseInt(arr[100000+1]) * parseInt(arr[1000000+1]))