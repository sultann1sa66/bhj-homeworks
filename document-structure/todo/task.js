const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
let delTasks = [];

tasksForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(taskInput.value !== ''){
        let div = document.createElement('div');
        let divWrap = document.createElement('div');
        let delTask = document.createElement('a');
        delTasks.push(delTask);
        delTask.innerText = ' x ';
        delTask.setAttribute('href', '#');
        delTask.classList.add('task__remove');
        
        divWrap.classList.add('task');
        divWrap.appendChild(div);
        divWrap.appendChild(delTask);
        div.classList.add('task__title');
        div.textContent = taskInput.value;
        console.log(delTasks);
        tasksList.appendChild(divWrap);
        e.target.reset();
    }
    })
    
    for(let i = 0; i < delTasks.length; i++) {
        delTasks[i].addEventListener('click', (e) => {
            delTasks[i].perentElement.remove();
            console(delTasks[i]);
        })
    }

