function findLongestAndShortestWords(text) {
    let longestWord = '';
    let shortestWord = '';
    let currentWord = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char !== ' ' && char !== '\n' && char !== '\t') {
            currentWord += char;
        } else {
            if (currentWord.length > 0) {
                if (longestWord.length === 0 || currentWord.length > longestWord.length) {
                    longestWord = currentWord;
                }if (shortestWord.length === 0 || currentWord.length < shortestWord.length) {
                    shortestWord = currentWord;
                }currentWord = '';
            }}}
    if (currentWord.length > 0) {
        if (longestWord.length === 0 || currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }if (shortestWord.length === 0 || currentWord.length < shortestWord.length) {
            shortestWord = currentWord;
        }}
    return [shortestWord, longestWord];
}