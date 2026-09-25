const toDoList = [];

function renderToDoList() {
    let htmlList = '';
    for (let i = 0; i < toDoList.length; i++) {
        const task = toDoList[i];
        const html = `<p>${task}</p>`;
        htmlList += html;
        console.log(htmlList);
    }
    document.querySelector('.list-div').innerHTML = htmlList;
}

function addToDo() {
    const inputElement = document.querySelector('.input-textbox');
    const task = inputElement.value;
    inputElement.value = ''; // reset the visuals after adding the task

    toDoList.push(task);
    console.log(toDoList);
    renderToDoList();
}