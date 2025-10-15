

let students = [{
    name: "pacis",
    age: 20,
    marks: [70, 76, 90]

},
{
    name: "kundwa",
    age: 22,
    marks: [80, 78, 69]

},
{
    name: "gihozo",
    age: 24,
    marks: [80, 59, 98]

}
];

function calculateAverage(marks) {
    let sum = 0;
    for (p = 0; p < marks.length; p++) {
        sum += marks[p];
    }
    return sum / marks.length;

}
//loop through all students and display summary

for (let p = 0; p < students.length; p++) {
    let student = students[p];
    let average = calculateAverage(student.marks);

    console.log("name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Average Marks: " + average);
    console.log("------------------");
}
// Add new student

function addStudent(name, age, marks) {
    students.push({ name, age, marks });
}
addStudent ("Pacento",26,[88, 76, 90]);