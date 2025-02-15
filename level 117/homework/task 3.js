class TimeHelper {
    static CREATION_TIME = new Date().getTime();

    static formatMilliseconds(milliseconds) {
        const date = new Date(milliseconds);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        };
        return date.toLocaleDateString('en-US', options);
    }
}

console.log(`Creation time (milliseconds): ${TimeHelper.CREATION_TIME}`);
console.log(`Creation time (formatted): ${TimeHelper.formatMilliseconds(TimeHelper.CREATION_TIME)}`);