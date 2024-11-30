let N = parseInt(prompt("Enter the number of elements:"));
let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(parseInt(prompt(`Enter element ${i + 1}:`)));
}

console.log("Elements at odd indices:");
for (let i = 1; i < N; i += 2) {
    console.log(arr[i]);
}