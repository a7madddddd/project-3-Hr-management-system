// Sample data - Array of objects
const feedbackData = [
    {
        name: "Lubna John",
        position: "HR for Marketing Solutions Company",
        date: "Submitted on June 10, 2024",
        description: "The HR Management System has greatly improved our efficiency and the support team is very responsive."
    },
    {
        name: "Alex Smith",
        position: "Software Developer at Tech Innovators",
        date: "Submitted on June 11, 2024",
        description: "Overall, a good system. However, there are some areas that could be improved, such as the reporting features."
    },
    {
        name: "Maria Garcia",
        position: "Project Manager at Business Corp",
        date: "Submitted on June 12, 2024",
        description: "The system is okay but occasionally runs into issues. Customer support is helpful, but it takes time to resolve problems."
    },
    {
        name: "Maria Garcia",
        position: "Project Manager at Business Corp",
        date: "Submitted on June 12, 2024",
        description: "The system is okay but occasionally runs into issues. Customer support is helpful, but it takes time to resolve problems."
    },
    {
        name: "Maria Garcia",
        position: "Project Manager at Business Corp",
        date: "Submitted on June 12, 2024",
        description: "The system is okay but occasionally runs into issues. Customer support is helpful, but it takes time to resolve problems."
    },
    {
        name: "Maria Garcia",
        position: "Project Manager at Business Corp",
        date: "Submitted on June 12, 2024",
        description: "The system is okay but occasionally runs into issues. Customer support is helpful, but it takes time to resolve problems."
    }
];

// Convert the array of objects to a JSON string and store it in local storage
const feedbackDataString = JSON.stringify(feedbackData);
localStorage.setItem('feedback_data', feedbackDataString);

console.log("Data has been stored in local storage.");

// Retrieve the data from local storage
const retrievedDataString = localStorage.getItem('feedback_array2');

// Parse the JSON string back into an array of objects
const retrievedData = JSON.parse(retrievedDataString);
console.log("Retrieved data from local storage:", retrievedData);

// Function to create and insert feedback cards
function createFeedbackCard(data) {
    const container = document.getElementById('feedback-container');

    data.forEach(item => {
        const col = document.createElement('div');
        col.classList.add('col-12', 'col-md-4');

        const card = document.createElement('div');
        card.classList.add('card', 'border-0', 'border-bottom', 'border-primary', 'shadow-sm');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'p-4', 'p-xxl-5');

        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.classList.add('img-fluid', 'rounded', 'rounded-circle', 'mb-4', 'border', 'border-5');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('src', item.image);
        img.setAttribute('alt', item.name);

        const figcaption = document.createElement('figcaption');
        const email = document.createElement('p');
        email.classList.add('card-text', 'text-primary', 'mb-3');
        email.textContent = item.email;


        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = item.description;

        const date = document.createElement('p');
        date.classList.add('card-text');
        const dateSmall = document.createElement('small');
        dateSmall.classList.add('text-muted');
        dateSmall.textContent = `Submitted on ${item.date}`;
        date.appendChild(dateSmall);

        const name = document.createElement('h4');
        name.classList.add('mb-2');
        name.textContent = item.name;

        const position = document.createElement('h5');
        position.classList.add('fs-6', 'text-secondary', 'mb-0');
        position.textContent = item.position;
        
        figcaption.appendChild(name);
        figcaption.appendChild(position);
        figcaption.appendChild(email);
        figcaption.appendChild(date);
        figcaption.appendChild(description);
        


        figure.appendChild(img);
        figure.appendChild(figcaption);

        cardBody.appendChild(figure);
        card.appendChild(cardBody);
        col.appendChild(card);

        container.appendChild(col);
    });
}

// Create and insert feedback cards
createFeedbackCard(retrievedData);
