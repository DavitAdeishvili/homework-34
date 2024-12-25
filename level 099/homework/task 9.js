const numberSeries = (start = 1, end = 10, step = 1) => {
    let series = [];
    for (let i = start; i <= end; i += step) {
        series.push(i);
    }
    return series;
};

console.log(numberSeries(2, 100, 8))
console.log(numberSeries())