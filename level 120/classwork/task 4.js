function characterFrequency(str) {
    const frequencyMap = new Map();
    for (const char of str) {
        const count = frequencyMap.get(char) || 0;
        frequencyMap.set(char, count + 1);
    }
    return frequencyMap;
}

console.log(characterFrequency("hello"));