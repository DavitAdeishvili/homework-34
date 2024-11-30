let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2; 
}

console.log("Doubled numbers:");
arr.forEach(num => console.log(num));