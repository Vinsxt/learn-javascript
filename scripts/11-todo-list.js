const toDoList = [
    {
        name: 'Task 1',
        dueDate: '2026-12-30'},
    {
        name: 'Task 2',
        dueDate: '2026-12-31'
    }
];

function deleteToDo(index) {
    toDoList.splice(index, 1);
    renderToDoList();
}

function renderToDoList() {
    let htmlList = '';
    for (let i = 0; i < toDoList.length; i++) {
        const taskObject = toDoList[i];
        const name = taskObject.name;
        const dueDate = taskObject.dueDate;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="deleteToDo(${i})">Delete</button>
        `;
        htmlList += html;
        console.log(htmlList);
    }
    document.querySelector('.list-div').innerHTML = htmlList;
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