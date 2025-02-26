function getUserInputAndGreet(callback) {
    const name = prompt("Please enter your name:");
    setTimeout(() => {
        alert(`Hello, ${name}! Thank you for helping.`);
        if (callback) {
            callback();
        }
    }, 3000);
}