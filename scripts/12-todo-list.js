const toDoList = [
    {
        name: 'Task 1',
        dueDate: '2026-12-30'},
    {
        name: 'Task 2',
        dueDate: '2026-12-31'
    }
];

const addButtonElement = document.querySelector('.js-add-button');
addButtonElement.addEventListener('click', () => {
    addToDo();
});

function deleteToDo(index) {
    toDoList.splice(index, 1);
    renderToDoList();
}

function renderToDoList() {
    let htmlList = ''; 
    toDoList.forEach((taskObject, index) => {
        const { name, dueDate } = taskObject;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button class="css-button-delete js-delete-button">Delete</button>
        `;
        htmlList += html;
    });
    document.querySelector('.list-div').innerHTML = htmlList;

    // Add event listeners to the delete buttons
    const deleteButtons = document.querySelectorAll('.js-delete-button');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            deleteToDo(index);
        });
    });
}

function addToDo() {
    const inputTextElement = document.querySelector('.input-textbox');
    const inputDateElement = document.querySelector('.input-date');
    
    const task = inputTextElement.value;
    const taskDate = inputDateElement.value;

    inputTextElement.value = ''; // reset the visuals after adding the task
    inputDateElement.value = '';

    toDoList.push({
        name: task,
        dueDate: taskDate
    });

    console.log(toDoList);
    renderToDoList();
}