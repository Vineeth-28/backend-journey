const employees = [
    {
        id:1,
        name:"Rahul",
        department:"Engineering",
        salary:60000
    },
    {
        id:2,
        name:"Aman",
        department:"DevOps",
        salary:70000
    },
    {
        id:3,
        name:"Priya",
        department:"Engineering",
        salary:65000
    }
];


console.log(Object.values(employees));

const employee =employees.find(emp => emp.id===2);
console.log(employee);

const filtering = employees.filter(emp =>emp.department === "Engineering");
console.log(filtering);

const totalSalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

console.log(totalSalary);

const employeeInfo = employees.map((employee) => {
  return {
    name: employee.name,
    department: employee.department,
  };
});

console.log(employeeInfo);