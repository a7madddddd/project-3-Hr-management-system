document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const employeeTableBody = document.getElementById('employeeTableBody');

    // Load employee data from JSON file
    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            // Display all employees initially
            displayEmployees(data);

            // Filter employees based on search input
            searchInput.addEventListener('input', function() {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredEmployees = data.filter(employee => 
                    employee.name.toLowerCase().includes(searchTerm) ||
                    employee.position.toLowerCase().includes(searchTerm) ||
                    employee.department.toLowerCase().includes(searchTerm)
                    // Add more fields for searching as needed
                );
                displayEmployees(filteredEmployees);
            });
        })
        .catch(error => console.error('Error loading JSON file:', error));

    // Function to display employees in the table
    function displayEmployees(employees) {
        employeeTableBody.innerHTML = ''; // Clear existing table rows

        employees.forEach(employee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.id}</td>
                <td> <div class="image-container"><img src="${employee.image}" alt="${employee.name}" class="employee-image"></div></td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
                <!-- Add more cells for additional fields -->
            `;
            employeeTableBody.appendChild(row);
        });
    }
});
