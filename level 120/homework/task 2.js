function invertMap(originalMap) {
    const invertedMap = new Map();
    for (let [key, value] of originalMap) {
        invertedMap.set(value, key);
    }
    return invertedMap;
}

console.log(invertMap(new Map([['a', 1], ['b', 2], ['c', 1]])));