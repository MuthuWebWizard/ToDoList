let inputField = document.getElementById('input');
let addBtn = document.getElementById('add-btn');
let listContainer = document.getElementById('list');

addBtn.addEventListener('click', addItem);

function addItem() {
    let inputVal = inputField.value;
    if (inputVal !== '') {
        let taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.textContent = inputVal;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn'); 
        deleteBtn.addEventListener('click', function() {
            taskItem.remove(); 
        });
        taskItem.appendChild(deleteBtn);
        listContainer.appendChild(taskItem);
        inputField.value = '';
        taskItem.addEventListener('click', function () {
            this.classList.toggle('strike');
        });

    } else {
        alert('Please enter a task');
    }
}
