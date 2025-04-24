const email = document.getElementById("email")
const password = document.getElementById("password")
const login = document.getElementById("form")
const loginBtn = document.getElementById("login-btn")


loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value == "admin@gmail.com" && password.value == "admin123") {
        window.location.href = "dashboard.html";
        return true;
    } else if (email.value == "" || password.value ==""){
        alert("Please Enter Proper Email and Password")
    } else {
        alert("Incorrect Credentials")
        return false;
    }
})