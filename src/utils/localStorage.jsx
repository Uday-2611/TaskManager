// localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile data and prepare the monthly performance report.",
                "taskDate": "2025-01-05",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting Preparation",
                "taskDescription": "Prepare the agenda for the upcoming team meeting.",
                "taskDate": "2024-12-28",
                "category": "Planning"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Customer Follow-Up",
                "taskDescription": "Follow up with customers for feedback on recent services.",
                "taskDate": "2025-01-06",
                "category": "Customer Service"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Inventory Check",
                "taskDescription": "Ensure stock levels are accurate in the inventory system.",
                "taskDate": "2024-12-27",
                "category": "Logistics"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Vihaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Software Update",
                "taskDescription": "Update company software to the latest version.",
                "taskDate": "2025-01-07",
                "category": "IT"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Arjun",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Marketing Campaign Planning",
                "taskDescription": "Draft a plan for the upcoming marketing campaign.",
                "taskDate": "2025-01-10",
                "category": "Marketing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Reyansh",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Office Supplies Restock",
                "taskDescription": "Ensure all office supplies are stocked.",
                "taskDate": "2024-12-30",
                "category": "Operations"
            }
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Aditya",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin }
}