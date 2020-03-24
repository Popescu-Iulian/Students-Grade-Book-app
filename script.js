const STUDENT_NAME = document.querySelector('.student-name');
const TABLE_BODY = document.querySelector('.table-body');
const GRADES_BODY = document.querySelector('.grades-table-body');

class Students {
  constructor(name) {
    this.name = name;
    this.grades = [];
    this.averageGrade;
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

class GradesBook {
  constructor() {
    this.students = [];
    this.evaluatedStudent;
  }

  addStudent(str) {
    let student = new Students(str);
    this.students.push(student);
  }

  seeGrades(idx) {
    let student = this.students[idx];
    this.evaluatedStudent = student;
  }

  sortAverageGradeAsc() {
    this.students.sort((a, b) => a.averageGrade - b.averageGrade);
  }

  sortAverageGradeDesc() {
    this.students.sort((a, b) => b.averageGrade - a.averageGrade);
  }

  addGrade(str) {
    this.evaluatedStudent.addGrade(str);
  }

  sortGradeAsc() {
    this.evaluatedStudent.grades.sort((a, b) => a - b);
  }

  sortGradeDesc() {
    this.evaluatedStudent.grades.sort((a, b) => b - a);
  }
}

let gradesBook = new GradesBook();

