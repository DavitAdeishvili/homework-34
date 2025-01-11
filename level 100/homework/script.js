const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTasks);

addTaskBtn.addEventListener('click', () => addTask(taskInput.value));

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadTasks();
});

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('li').forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
    if (!task) return;
    let li = document.createElement('li');
    let btn = document.createElement('button');
    li.textContent = task;
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
    li.appendChild(btn);
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function loadTasks() {
    taskList.innerHTML = '';
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTask(task));
}