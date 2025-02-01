class Student {
    constructor() {
        this._score = 0;
    }

    get grade() {
        if (this._score >= 90) return 'A';
        if (this._score >= 80) return 'B';
        if (this._score >= 70) return 'C';
        if (this._score >= 60) return 'D';
        return 'F';
    }

    set score(value) {
        if (value >= 0 && value <= 100) {
            this._score = value;
        }
    }
}

const student = new Student();
student.score = 85;
console.log(student.grade);
student.score = 72;
console.log(student.grade);