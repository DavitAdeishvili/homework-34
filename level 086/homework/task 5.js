let N = parseInt(prompt("Enter the number of elements:"));
let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(parseInt(prompt(`Enter element ${i + 1}:`)));
}

let temp = arr[0];
arr[0] = arr[N - 1];
arr[N - 1] = temp;

console.log("Array after swapping first and last elements:");
arr.forEach(num => console.log(num));