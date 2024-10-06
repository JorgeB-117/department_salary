// Task 1: Create a Department Structure


//Creating a Department Structure
const company = {
    departments: [
        {
            departmentName: "Finance",
            employees: [
                {
                    name: "John", 
                    salary: 270000, 
                    subordinates: []},
                    {
                        name: "Cortana", 
                        salary: 60000, 
                        subordinates: []},
                            {
                                name: "Johnson",
                                salary: 85000,
                                subordinates: []
                            }
                    ]
            },
        {
            departmentName: "Management",
            employees: [
                {
                    name: "Arbiter", 
                    salary: 100000, 
                    subordinates: [
                    {
                        name: "Lasky", 
                        salary: 82000, 
                        subordinates: []},
                            {
                                name: "Palmer", 
                                salary: 78000, 
                                subordinates:[]}
                    ]
                }
            ]  
        },
        {
            departmentName: "Human Resources",
            employees: [
                {
                    name: "Halsey", 
                    salary: 180000, 
                    subordinates:[
                    {
                        name: "Miranda", 
                        salary: 110000, 
                        subordinates:[]},
                            {
                                name: "Keyes", 
                                salary: 90000, 
                                subordinates: []},
                                    {
                                        name: "Tartarus", 
                                        salary: 58000, 
                                        subordinates: []}
                     ]
                }
            ]
        }
    ]
};

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    function calculateEmploeeSalary(employee) {
       let totalSalary = employee.salary;

       for (let subordinate of employee.subordinates) {
           totalSalary += calculateEmploeeSalary (subordinate);
       }
       return totalSalary;
    }
        let totalDepartmentSalary = 0;
        for (let employee of department.employees) {
       
            totalDepartmentSalary += calculateEmploeeSalary(employee);
    }
        return totalDepartmentSalary;
};

//Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company){
    let totalCompanySalary = 0;
    for (let department of company.departments){
        totalCompanySalary += calculateDepartmentSalary(department);
    }
    return totalCompanySalary;
};

// Salary for each department and salary for the company

company.departments.forEach(department=> {
    const totalSalary = calculateDepartmentSalary(department);
    console.log(`Total salary for ${department.departmentName}: $${totalSalary}`)});

console.log(`Total salary for all departments: $${calculateCompanySalary(company)}`);