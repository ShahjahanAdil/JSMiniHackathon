let loggedinemail = localStorage.getItem('loggedinEmail');
let profile = document.getElementById('profile');
profile.textContent = loggedinemail;

let todoData = [];

let getInputFieldValue = id => document.getElementById(id).value;
let createdAt = () => {
    let createdDate = new Date();
    return createdDate;
};

let display = document.getElementById('todo-display');

function clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
}

function handleInsert() {
    let title = getInputFieldValue("title");
    let description = getInputFieldValue("description");
    let date = getInputFieldValue("date");

    if (!title || !description || !date) {
        return alert("Please fill all fields.");
    }

    let todo = {
        id: todoData.length + 1,
        title: title,
        description: description,
        date: date,
        status: 'Incomplete',
        createdAt: createdAt()
    };

    todoData.push(todo);
    console.log(todo);

    alert("Successfully Inserted");
    clearInputs();
}

function displayTodo(todo) {
    return `
        <div class="todo-item">
            <p><strong>Serial ID:</strong> ${todo.id}</p>
            <h3><strong>Title:</strong> ${todo.title}</h3>
            <p><strong>Description:</strong> ${todo.description}</p>
            <p><strong>Date:</strong> ${todo.date}</p>
            <p><strong>Status:</strong> ${todo.status}</p>
            <p><strong>Created At:</strong> ${todo.createdAt}</p>
        </div>
        <hr>
    `;
}

function handleRead() {
    display.innerHTML = "";
    todoData.forEach(todo => {
        display.innerHTML += displayTodo(todo);
    })
}

function handleDelete() {
    let delID = +prompt("Enter Serial ID to delete data!");
    let filteredTodoData = todoData.filter(todo => todo.id !== delID);
    todoData = filteredTodoData;

    alert("ID No. " + delID + " Successfully Deleted");
    handleRead();
}

function handleUpdate() {
    let updateID = +prompt("Enter Serial ID to delete data!");
    let newStatus = "Completed";
    let updatedTodoData = todoData.map((todo, i) => {
        if (todo.id === updateID) {
            return { ...todo, status: newStatus }
        }
        else {
            return todo;
        }
    })
    todoData = updatedTodoData;

    alert("Status of ID No." + updateID + " is Successfully Updated");
    handleRead();
}