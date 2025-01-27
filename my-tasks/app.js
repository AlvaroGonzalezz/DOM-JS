const inputTask = document.getElementById("inputTask");
const btnCreate = document.getElementById("btnCreate");
const listTask = document.getElementById("tasks");

function addTask() {
    if (inputTask.value) {
        // container of tasks
        let newTask = document.createElement("div");
        newTask.classList.add("item");
        let text = document.createElement("p")
        text.innerText = inputTask.value;
        newTask.appendChild(text);
        // container of icons
        let iconComplete = document.createElement("i");
        iconComplete.classList.add("bi", "bi-check-circle-fill");
        newTask.appendChild(iconComplete);
        iconComplete.addEventListener("click", completeTask);
        let iconTrash = document.createElement("i");
        iconTrash.classList.add("bi", "bi-trash-fill");
        newTask.appendChild(iconTrash);
        iconTrash.addEventListener("click", deteleTask)
        // add new task to list
        listTask.appendChild(newTask);
    } else {
        alert("Enter a new task, please");
    }
}

function completeTask(e) {
    let task = e.target.parentNode; 
    task.classList.toggle("complete");
}

function deteleTask(e) {
    let task = e.target.parentNode;
    task.remove();
}

btnCreate.addEventListener("click", addTask);
inputTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask()
    }
});
