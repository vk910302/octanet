document.getElementById("addBtn").addEventListener("click", function() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
    var task = todoInput.value;
    
    if (task.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.classList.add("todoItem");
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button class="deleteBtn">Delete</button>
        `;
        todoList.appendChild(listItem);
        todoInput.value = "";
    }
});

document.addEventListener("click", function(event) {
    if (event.target.type === "checkbox") {
        var listItem = event.target.parentElement;
        listItem.classList.toggle("completed");
    }
    if (event.target.classList.contains("deleteBtn")) {
        var listItem = event.target.parentElement;
        listItem.remove();
    }
});