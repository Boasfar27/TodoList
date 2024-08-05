const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteBtn = document.getElementById("deleteBtn");
const queueBtn = document.getElementById("queueBtn");
const saveBtn = document.getElementById("saveBtn");

addTaskBtn.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        newTaskInput.value = "";
        alert("Unit tugas baru telah ditambahkan!"); 
    }
});

deleteBtn.addEventListener("click", () => {
    const tasks = taskList.querySelectorAll("li");
    if (tasks.length > 0) {
        tasks[0].remove();
        alert("Unit tugas pertama telah dihapus!");
    } else {
        alert("Tidak ada unit tugas yang dapat dihapus!");
    }
});

queueBtn.addEventListener("click", () => {
    alert("Antrian dimasukan!");
});

saveBtn.addEventListener("click", () => {
    alert("Terimakasih semoga harimu menyenangkan!");
});
