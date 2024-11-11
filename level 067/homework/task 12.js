function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.hasPassed = function() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        const average = sum / this.marks.length;
        return average >= 50;
    };
}