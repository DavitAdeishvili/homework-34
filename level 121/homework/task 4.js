function changeColorWithDelay(color, callback) {
    setTimeout(() => {
        document.body.style.color = color;
        if (callback) {
            callback();
        }
    }, 2000);
}