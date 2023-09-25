// Add a new task
document.getElementById("addButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        li.innerHTML = `<span class="toggle"></span>${taskText}<span class="delete">✖</span>`;
        ul.appendChild(li);
        taskInput.value = "";
    }
});

// Toggle task completion
document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.classList.contains("toggle")) {
        const listItem = e.target.parentElement;
        listItem.classList.toggle("done");
    }
});

// Delete a task
document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        const listItem = e.target.parentElement;
        listItem.remove();
    }
});
