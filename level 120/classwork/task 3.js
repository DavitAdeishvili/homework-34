function symmetricDifference(set1, set2) {
    const difference = new Set(set1);
    for (const value of set2) {
        if (difference.has(value)) {
            difference.delete(value);
        } else {
            difference.add(value);
        }
    }
    return difference;
}

console.log(symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])));