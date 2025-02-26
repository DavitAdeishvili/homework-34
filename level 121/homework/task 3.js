function processArrayWithDelay(numbers, callback) {
    const result = [];
    numbers.forEach((number, index) => {
        setTimeout(() => {
            result.push(number ** 2);
            if (result.length === numbers.length) {
                callback(result);
            }
        }, 2000 * (index + 1));
    });
}

processArrayWithDelay([1, 2, 3], (result) => {
    console.log('Processed array:', result);
});