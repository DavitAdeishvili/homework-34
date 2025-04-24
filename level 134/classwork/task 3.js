function filterPalindromes(words) {
    return words.filter(word => word === word.split('').reverse().join(''));
}

console.log(filterPalindromes(["ana", "hello", "level", "world", "madam"]));