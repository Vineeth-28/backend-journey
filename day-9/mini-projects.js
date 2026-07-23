/************************************************
 Employee Access Management System
************************************************/

const companyName = "Google";

let totalEmployees = 3;

const employees = [
    {
        id: 1,
        name: "Vineet",
        role: "Backend Developer",
        isAdmin: true
    },
    {
        id: 2,
        name: "Rahul",
        role: "Frontend Developer",
        isAdmin: false
    },
    {
        id: 3,
        name: "Aman",
        role: "DevOps Engineer",
        isAdmin: false
    }
];

function showCompany() {
    console.log(`Company: ${companyName}`);
}

const findEmployee = function (id) {

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].id === id) {
            return employees[i];
        }
    }

    return null;
};

const checkAccess = function (employee) {

    if (employee === null) {
        console.log("Employee not found");
        return;
    }

    if (employee.isAdmin) {

        let accessLevel = "Full";

        console.log("Access Granted");
        console.log(`Access Level: ${accessLevel}`);

    } else {

        console.log("Access Denied");

    }
};

const hireEmployee = function (name, role) {

    totalEmployees++;

    console.log(`Hired ${name} as ${role}`);

};

showCompany();

const emp1 = findEmployee(1);
checkAccess(emp1);

console.log("----------------");

const emp2 = findEmployee(2);
checkAccess(emp2);

console.log("----------------");

hireEmployee("Rohit", "QA Engineer");

console.log("----------------");

console.log(`Total Employees: ${totalEmployees}`);