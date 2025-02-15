function findMaxKeys(map) {
    let maxVal = -Infinity;
    let keys = [];
    for (let [key, value] of map) {
        if (value > maxVal) {
            maxVal = value;
            keys = [key];
        } else if (value === maxVal) {
            keys.push(key);
        }
    }
    return keys;
}

console.log(findMaxKeys(new Map([['a', 5], ['b', 3], ['c', 5]])));