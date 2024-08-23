// Write your code here
function old_getStudents(hasTeachingAssistant, classList) {    
    let students = [...classList];
    const _ = students.shift();
    if (hasTeachingAssistant)
    {
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
    let { hasTeachingAssistant, classList} = classroom;

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    }
    else {
        [teacher, ...students] = classList;
    }

    return students;
}



const classroom = {
    hasTeachingAssistant :true,
    classList : ['chris', 'sarah', 'ebony', 'tom', 'charlie']
};
let test1 = getStudents(classroom);
console.log(test1);

classroom.hasTeachingAssistant = false;
let test2 = getStudents(classroom);
console.log(test2);