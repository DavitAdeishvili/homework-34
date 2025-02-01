class Thermometer {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get temperature() {
        return this._celsius * 9/5 + 32;
    }

    set temperature(celsius) {
        this._celsius = celsius;
    }
}

const thermometer = new Thermometer(25);
console.log(thermometer.temperature);
thermometer.temperature = 30;
console.log(thermometer.temperature);