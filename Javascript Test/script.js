let users = [];

let getInputFieldValue = id => document.getElementById(id).value;
let getRandomID = () => Math.random().toString(36).slice(2);
let createdAt = () => {
    let createdDate = new Date();
    return createdDate;
};

function handleRegister() {
    let email = getInputFieldValue("email");
    let password = getInputFieldValue("password");

    if (password.length < 6) {
        return alert("Password must be at least 6 characters.");
    }

    if (users.find(user => user.email === email)) {
        return alert("Email already exists.");
    }

    let user = {
        email: email,
        password: password,
        uid: getRandomID(),
        status: 'active',
        createdAt: createdAt()
    };

    users.push(user);
    console.log(user);

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'login.html';
}