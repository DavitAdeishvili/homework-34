let N = parseInt(prompt("Enter the number of elements:"));
let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(parseInt(prompt(`Enter element ${i + 1}:`)));
}

console.log("Reversed array:");
for (let i = N - 1; i >= 0; i--) {
    console.log(arr[i]);
}