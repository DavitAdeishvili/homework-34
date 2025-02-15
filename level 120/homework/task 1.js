function isSubset(set1, set2) {
    for (let elem of set1) {
        if (!set2.has(elem)) {
            return false;
        }
    }
    return true;
}

console.log(isSubset(new Set([1, 2]), new Set([1, 2, 3])));