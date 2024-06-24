const InputName = document.getElementById("NameInput");
const InputEmail = document.getElementById("emailInput");
const InputPassword = document.getElementById("passwordInput");
const passwordCONFInput = document.getElementById("passwordCONFInput");
const NameError = document.getElementById("NameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const passwordConfError = document.getElementById("passwordConfError");
const form = document.getElementById("regsForm");

const namePat = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passPat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateForm() {
    let isValid = true;

    const inp_V = InputName.value.trim();
    if (inp_V === "" || !namePat.test(inp_V)) {
        NameError.innerHTML = "Numbers and symbols are not allowed";
        NameError.style.fontSize="10px"
        isValid = false;
    } else {
        NameError.innerHTML = "";
    }

    if (InputEmail.value === "" || !EmailPat.test(InputEmail.value)) {
        emailError.innerHTML = "Invalid email address";
        emailError.style.fontSize="10px"
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    if (InputPassword.value === "" || !passPat.test(InputPassword.value)) {
        passwordError.innerHTML = "Invalid password. Password must be at least 8 characters long";
        passwordError.style.fontSize="10px"
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    if (passwordCONFInput.value === "" || passwordCONFInput.value !== InputPassword.value) {
        passwordConfError.innerHTML = "Passwords do NOT match!";
        passwordConfError.style.fontSize="10px"     
        isValid = false;
    } else {
        passwordConfError.innerHTML = "";
    }

    return isValid;
}

function store(name, email, password) {
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    users.push({ name, email, password });

   
    localStorage.setItem("users", JSON.stringify(users));

    alert("Data stored successfully!");
}

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        store(InputName.value, InputEmail.value, InputPassword.value);
        form.reset();  
    }
});