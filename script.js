const STUDENT_NAME = document.querySelector('.student-name');
const TABLE_BODY = document.querySelector('.table-body');

class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
    this.averageGrade = '';
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  calcAverageGrade() {
    let gradesSum = 0;

    if (this.grades.length === 0) {
      this.averageGrade = '';
    } else {
      for (let i = 0; i < this.grades.length; i++) {
        gradesSum += this.grades[i];
      }
      this.averageGrade = gradesSum / this.grades.length;
    }
  }
}