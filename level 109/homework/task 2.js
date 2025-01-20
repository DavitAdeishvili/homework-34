function manualObjectAssign(target, ...sources) {
    sources.forEach(source => {
        if (typeof source === 'object' && source !== null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        }
    });

    return target;
}