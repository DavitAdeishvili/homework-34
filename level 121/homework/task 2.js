function processWithDelay(message, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) {
            callback();
        }
    }, 2000);
}

processWithDelay('Processing complete!', () => {
    console.log('The process is finished.');
});