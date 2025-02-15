function unionOfSets(setsArray) {
    const unionSet = new Set();
    for (const set of setsArray) {
        for (const value of set) {
            unionSet.add(value);
        }
    }
    return unionSet;
}

console.log(unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));