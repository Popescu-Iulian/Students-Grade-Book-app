const STUDENT_NAME = document.querySelector('.student-name');
const TABLE_BODY = document.querySelector('.table-body');
const GRADES_BODY = document.querySelector('.grades-table-body');
const STUDENT_GRADE = document.querySelector('.student-grade');

class Students {
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

    for (let i = 0; i < this.grades.length; i++) {
      gradesSum += this.grades[i];
    }

    if (this.grades.length === 0) {
      this.averageGrade = '';
    }

    this.averageGrade = gradesSum / this.grades.length;
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

function drawStudents() {
  let str = '';

  for (let i = 0; i < gradesBook.students.length; i++) {
    let student = gradesBook.students[i];
    str += `
      <li><span>${student.name}</span><span>${student.averageGrade}</span><button onclick="seeOrAddGrades(${i})">See or add grades</button></li>
    `;

    console.log(student.grades);
    console.log(student.grades.length);
    console.log(student.averageGrade);
  }

  TABLE_BODY.innerHTML = str;
}

function drawGrades() {
  let grades = gradesBook.evaluatedStudent.grades;
  let str = '';

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    str += `
      <li>${grade}</li>
    `;
  }

  GRADES_BODY.innerHTML = str;
}

function addStudent() {
  let studentName = STUDENT_NAME.value;
  gradesBook.addStudent(studentName);
  STUDENT_NAME.value = '';
  drawStudents();
}

function sortAscAverageGrade() {
  gradesBook.sortAverageGradeAsc();
  drawStudents();
}

function sortDescAverageGrade() {
  gradesBook.sortAverageGradeDesc();
  drawStudents();
}

function seeOrAddGrades(idx) {
  gradesBook.seeGrades(idx);
  drawGrades();
  // remove hidden class
}

function hideGrades() {
  // add hidden class
}

function addGrade() {
  let studentGrade = STUDENT_GRADE.value;
  gradesBook.addGrade(studentGrade);
  STUDENT_GRADE.value = '';
  drawGrades();
  drawStudents();
}

function sortAscGrades() {
  gradesBook.sortGradeAsc();
  drawGrades();
}

function sortDescGrades() {
  gradesBook.sortGradeDesc();
  drawGrades();
}