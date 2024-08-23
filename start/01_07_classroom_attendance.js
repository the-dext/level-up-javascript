// Write your code here
function old_getStudents(hasTeachingAssistant, classList) {
  let students = [...classList];
  const _ = students.shift();
  if (hasTeachingAssistant) {
    const _ = students.shift();
  }
  return students;
}
/*
const classList = ['chris', 'sarah', 'ebony', 'tom', 'charlie'];

let test1 = getStudents(true, classList);
console.log(test1);

let test2 = getStudents(false, classList);
console.log(test2);
*/

function getStudents(classroom) {
  // object destructuring matches by property name, so hasTeachingAssistant becomes the value of classroom.hasTeachingAssistant
  let { hasTeachingAssistant, classList } = classroom;

  // array destructuring takes first element and puts into into the first variable, 2nd into 2nd and so on
  // until spread with ... takes the rest and puts it into a variable as an array
  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return students;
}

const classroomWithTeachingAssistant = {
  classList: ["chris", "sarah", "ebony", "tom", "charlie"],
  hasTeachingAssistant: true,
};
let test1 = getStudents(classroomWithTeachingAssistant);
console.log(test1);

const classroomWithoutTeachingAssistant = {
  classList: ["chris", "sarah", "ebony", "tom", "charlie"],
  hasTeachingAssistant: false,
};
let test2 = getStudents(classroomWithoutTeachingAssistant);
console.log(test2);
