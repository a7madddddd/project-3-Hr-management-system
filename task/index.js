
    




document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way


    // Load employee data from JSON file
    fetch('../info page/employees.json')
.then(response => response.json())
.then(data => {
    // Display all employees initially
    const employeeName1 = document.getElementById('employeeName');
    // Filter employees based on search input
    
        const searchTerm = employeeName1.value.toLowerCase();
        const filteredEmployees = data.filter(employee => 
            employee.name.toLowerCase().includes(searchTerm) ||
            employee.position.toLowerCase().includes(searchTerm) ||
            employee.department.toLowerCase().includes(searchTerm)
            // Add more fields for searching as needed
        );
        console.log(filteredEmployees);
   


    // Get form data
    const employeeName = filteredEmployees[0].name;
    const employeePosition=filteredEmployees[0].position;
    const employeeImage=filteredEmployees[0].image;
    const title = document.getElementById('title').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value;



    // Create a task object
    const task = {
        employeeName: employeeName,
        position:employeePosition,
        image:employeeImage,
        title: title,
        startDate: startDate,
        endDate: endDate,
        description: description,
    };



    // Store the task object in local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Retrieve and log the tasks from local storage
    console.log(JSON.parse(localStorage.getItem('tasks')));

    // Add the new task card to the DOM
    addTaskCard(task);

    // Clear form fields
    document.getElementById('taskForm').reset();


})
.catch(error => console.error('Error loading JSON file:', error));
});

function addTaskCard(task) {
    const cardContainer = document.getElementById('cardContainer');

    // Create card elements
    const cardItem = document.createElement('div');
    cardItem.className = 'card card-item';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const row = document.createElement('div');
    row.className = 'row align-items-center';
    
    const colAuto = document.createElement('div');
    colAuto.className = 'col-auto';
    
    const img = document.createElement('img');
    img.className = 'img-fluid';
    img.src = `../${task.image}`; // Placeholder image
    img.alt = 'dashboard-user';
    
    const col = document.createElement('div');
    col.className = 'col';
    
    const h5 = document.createElement('h5');
    h5.textContent = task.employeeName;
    
    const span = document.createElement('span');
    span.textContent = task.position;
    
    const taskList = document.createElement('ul');
    taskList.className = 'task-list';
    
    const taskItem = document.createElement('li');
    
    const taskIcon = document.createElement('i');
    taskIcon.className = 'task-icon';
    
    const taskTitle = document.createElement('h6');
    taskTitle.innerHTML = `${task.title} <span class="float-right text-muted">${new Date(task.startDate).toLocaleDateString()}</span>`;
    
    const taskDescription = document.createElement('p');
    taskDescription.className = 'text-muted';
    taskDescription.textContent = task.description;

    // Append elements
    colAuto.appendChild(img);
    row.appendChild(colAuto);
    col.appendChild(h5);
    col.appendChild(span);
    row.appendChild(col);
    cardBody.appendChild(row);
    taskItem.appendChild(taskIcon);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    taskList.appendChild(taskItem);
    cardBody.appendChild(taskList);
    cardItem.appendChild(cardBody);
    cardContainer.appendChild(cardItem);
}

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskCard);
});