let getInputFieldValue = id => document.getElementById(id).value;

function handleLogin() {
    let email = getInputFieldValue("email");
    let password = getInputFieldValue("password");

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return alert("Invalid email or password.");
    }

    localStorage.setItem('loggedinEmail', email);
    alert('Login Succesfull! ' + email);
    window.location.href = 'todo.html';
}