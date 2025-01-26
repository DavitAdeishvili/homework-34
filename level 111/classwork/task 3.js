class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        return `${this.brand} ${this.model} engine started!`;
    }

    Details() {
        return `${this.brand} ${this.model}, Year: ${this.year}`;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, year, battery) {
        super(brand, model, year);
        this.battery = battery;
    }

    startEngine() {
        return `${this.brand} is a great car`;
    }

    Details() {
        return `${super.Details()}, Battery Capacity: ${this.battery} k/h`;
    }
}

const car = new Car("Toyota", "Corolla", 2020);
const electricCar = new ElectricCar("Tesla", "Model S", 2021, 100);

console.log(car.startEngine());
console.log(car.Details());

console.log(electricCar.startEngine());
console.log(electricCar.Details());