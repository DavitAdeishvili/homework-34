const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

const titleText = "To-Do List";
const addButtonText = "დაამატეთ";
const clearButtonText = "ყველა დავალების წაშლა";
const deleteButtonText = "წაშლა";
const editButtonText = "რედაქტირება";
const saveButtonText = "შენახვა";

document.getElementById('title').textContent = titleText;
addTaskBtn.textContent = addButtonText;
clearAllBtn.textContent = clearButtonText;

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = deleteButtonText;
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = editButtonText;
        editBtn.addEventListener('click', function() {
            const editInput = document.createElement('input');
            editInput.value = taskText;

            listItem.textContent = '';
            listItem.appendChild(editInput);

            const saveBtn = document.createElement('button');
            saveBtn.textContent = saveButtonText;
            saveBtn.addEventListener('click', function() {
                const updatedText = editInput.value;
                if (updatedText) {
                    listItem.textContent = updatedText;
                    listItem.appendChild(deleteBtn);
                    listItem.appendChild(editBtn);
                }
            });

            listItem.appendChild(saveBtn);
        });

        listItem.appendChild(deleteBtn);
        listItem.appendChild(editBtn);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});

clearAllBtn.addEventListener('click', function() {
    taskList.innerHTML = '';
});