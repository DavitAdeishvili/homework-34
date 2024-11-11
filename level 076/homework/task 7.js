// ობიექტის შექმნა
const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer',
    
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    },

    
    getAge: function() {
        return this.age;
    },

    
    describe: function() {
        console.log(`${this.name} is a ${this.age}-year-old ${this.occupation}.`);
    }
};