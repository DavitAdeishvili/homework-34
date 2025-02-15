class RandomHelper {
    static CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    static randomChar() {
        const randomIndex = Math.floor(Math.random()) * 1000
        return RandomHelper.CHAR_SET.charAt(randomIndex);
    }
}

console.log(`Random character: ${RandomHelper.randomChar()}`);