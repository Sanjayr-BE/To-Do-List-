var array = JSON.parse(localStorage.getItem('array')) || [];
var result = document.getElementById('result');

common(array);

function common(element) {
    result.innerHTML = '';

    element.forEach(item => {
        var div = document.createElement('div');
        div.className = item.iscompleted ? 'task completed' : 'task';

        // Checkbox for completion status
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = item.iscompleted;
        checkbox.addEventListener('change', () => {
            toggle(item.id);
        });

        // Task name
        var main = document.createElement('span');
        main.textContent = item.name;
        main.style.flexGrow = "1";
        main.style.marginRight = "10px";

        // Delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => {
            deleted_ele(item.id);
        });

        div.appendChild(checkbox);
        div.appendChild(main);
        div.appendChild(deleteBtn);
        result.append(div);
    });
}

// Add a new task
document.getElementById('add').addEventListener('click', adding);

function adding() {
    var text = document.getElementById('text').value;

    // Check if the input is empty
    if (text === '') {
        alert('Please enter a task!');
        return; 
    }

    var obj = { id: Date.now(), name: text, iscompleted: false };
    array.push(obj);
    localStorage.setItem('array', JSON.stringify(array));

    common(array);
    document.getElementById('text').value = '';
}

// Delete a task
function deleted_ele(itemid) {
    array = array.filter(item => item.id !== itemid);
    localStorage.setItem('array', JSON.stringify(array));
    common(array);
}

// Search tasks
document.getElementById('text').addEventListener('keyup', searching);

function searching() {
    var text = document.getElementById('text').value;
    var filtering = array.filter(item => item.name.includes(text));
    common(filtering);
}

// Reload tasks
document.getElementById('relode').addEventListener('click', relode);

function relode() {
    document.getElementById('text').value = '';
    common(array);
}

// Toggle completed status
function toggle(itemid) {
    array = array.map(item => {
        if (item.id === itemid) {
            item.iscompleted = !item.iscompleted;
        }
        return item;
    });

    localStorage.setItem('array', JSON.stringify(array));
    common(array);
}