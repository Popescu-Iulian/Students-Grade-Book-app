const STUDENT_NAME = document.querySelector('.student-name');
const TABLE_BODY = document.querySelector('.table-body');

const LIST = [
  {
    name: 'ion',
    grades: []
  }
];

let editIdx;

function draw() {
  let str = '';
  for (let i = 0; i < LIST.length; i++) {
    str += `
		<li><span>${LIST[i].name}</span><span>${LIST[i].grades}</span><button onclick="seeGrades(${i})">See grades</button></li>
	`;
  }
  TABLE_BODY.innerHTML = str;
}

function addStudent(event) {
  event.preventDefault();

  const NEW_STUDENT = {
    name: STUDENT_NAME.value
  };

  if (editIdx === undefined) {
    LIST.push(NEW_STUDENT);
  } else {
    LIST[editIdx] = NEW_STUDENT;
  }

  STUDENT_NAME.value = '';

  draw();
}

function seeGrades(idx) { }
