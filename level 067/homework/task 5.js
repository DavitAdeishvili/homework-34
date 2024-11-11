function Classroom(students) {
    this.students = students;
    this.countStudents = function() {
        console.log('Number of students: ' + this.students.length);
    };
}