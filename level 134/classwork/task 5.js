function toObj(matrix) {
    return matrix.reduce((obj, pair) => {
        obj[pair[0]] = pair[1]
        return obj;
    },{});
}

console.log(toObj([["a", 1], ["b", 2], ["c", 3]]));