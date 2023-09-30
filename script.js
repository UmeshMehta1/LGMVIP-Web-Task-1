const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add a new task
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

// Create a new task and add it to the list
function createTask(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);

    // Add event listeners for edit and delete buttons
    li.querySelector(".edit").addEventListener("click", () => editTask(li));
    li.querySelector(".delete").addEventListener("click", () => deleteTask(li));
}

// Edit a task
function editTask(li) {
    const taskText = li.querySelector(".task-text").textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
        li.querySelector(".task-text").textContent = newText;
    }
}

// Delete a task
function deleteTask(li) {
    taskList.removeChild(li);
}

// Mark a task as completed
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-text")) {
        e.target.classList.toggle("completed");
    }
});
