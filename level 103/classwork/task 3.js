function createObjectFromArray(arr) {
    let obj = {};
    arr.forEach((item, index) => {
        obj[index + 1] = item;
    });
    return obj;
}

console.log(createObjectFromArray(["David", "Adeishvili"]))