function greetWithDelay(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        if (callback) {
            callback();
        }
    }, 2000);
}

greetWithDelay('John', () => {
    console.log('Greeting message logged after delay.');
});