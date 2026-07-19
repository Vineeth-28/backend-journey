const students = [
    {
        name: "Rahul",
        age: 20,
        course: "Backend"
    },
    {
        name: "Aman",
        age: 22,
        course: "DevOps"
    },
    {
        name: "Priya",
        age: 21,
        course: "Frontend"
    }
];

console.log(students[0].name + " - " + students[0].course);
console.log(students[1].name + " - " + students[1].course);
console.log(students[2].name + " - " + students[2].course);

students[0].course = "Backend Engineering";
console.log(students[0].name + " - " + students[0].course);

students.push( {
    name: "Rohit",
    age:23,
    course:"NodeJs"
})

console.log(students);