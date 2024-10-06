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