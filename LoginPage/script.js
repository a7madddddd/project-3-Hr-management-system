const EmailInput = document.getElementById("emailInput");
const PasswordInput = document.getElementById("passwordInput");
const emailErrorMessage = document.getElementById("emailError");
const passwordErrorMessage = document.getElementById("passwordError");

async function fetchData() {
    const managerData = localStorage.getItem("manager_data");
    if (!managerData) {
        try {
            const response = await fetch('HRinfo.json');
            const userData = await response.json();
            localStorage.setItem("manager_data", JSON.stringify(userData));

            console.log("User data stored in local storage as manager_data.");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        console.log("Manager data already exists in local storage.");
    }
}

fetchData();

function InputValidation() {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const managerData = JSON.parse(localStorage.getItem("manager_data"));
    const jsonEmail = managerData.email;
    const jsonPassword = managerData.password;
    const inputEmail = EmailInput.value;
    const inputPassword = PasswordInput.value;

    let user = storedUsers.find(user => user.email === inputEmail && user.password === inputPassword);
    let inpValid = true;

    if ((!user) && (inputEmail !== jsonEmail || inputPassword !== jsonPassword)) {
        emailErrorMessage.innerHTML = "Email or password not correct";
        passwordErrorMessage.innerHTML = "Email or password not correct";
        inpValid = false;
    } else {
        emailErrorMessage.innerHTML = "";
        passwordErrorMessage.innerHTML = "";
        localStorage.setItem("auth_links", "true");
        window.location.href = "/starterPage/index.html";
    }

    return inpValid;
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    InputValidation();
});
