// 1) Create a constructor function Person that takes two parameters: name and age.
// Add a method introduce() that logs:
// "Hi, I am <name> and I am <age> years old."

function Person (name, age){
    this.name = name;
    this.age = age;
    function introduce () {
        console.log("Hi, I am " + name + "and I am " + age + " years old.")
    }
}

// 2) Create a constructor function Car with parameters brand and year.
// If the year isn't provided, set a default value of 2020.
// Add a method describe() to print:
// "This is a <brand> from <year>."

function Car (brand, year = 2020){
    this.brand = brand;
    this.year = year;
    function describe() {
        console.log("This is a " + brand + "from" + year)
    }
}