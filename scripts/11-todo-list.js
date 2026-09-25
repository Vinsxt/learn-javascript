const toDoList = [];

function addToDo() {
    const inputElement = document.querySelector('.input-textbox');
    const task = inputElement.value;
    inputElement.value = ''; // reset the visuals after adding the task
    
    toDoList.push(task);
    console.log(toDoList);
}