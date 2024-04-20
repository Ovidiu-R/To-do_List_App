import { v4 as uuidv4 } from 'uuid';
import { fetchTasks } from './displayHandler';
import { closeModal } from './displayHandler';

export const addTask = () => {
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    const submit = document.getElementById('submit');
    const form = document.getElementById('newTaskForm');

    submit.addEventListener('click', (event) => { 
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (form.checkValidity()){
            const newTask = new Task(title.value, details.value, date.value, priority.value, 'test');
            console.log(newTask);
            const taskKey = uuidv4();
            localStorage.setItem(taskKey, JSON.stringify(newTask));
            closeModal();
            fetchTasks();
        } else {
            form.reportValidity();
            console.log('INVALID');
        }
    
    });
}

export const editTask = (editKey) => {
    const titleEdit = document.getElementById('editTitle');
    const detailsEdit = document.getElementById('editDetails');
    const dateEdit = document.getElementById('editDate');
    const submitEdit = document.getElementById('editSubmit');
    const editForm = document.getElementById('editTaskForm');

    submitEdit.addEventListener('click', (event) => { 
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (editForm.checkValidity()){
            const editTask = new Task(titleEdit.value, detailsEdit.value, dateEdit.value, priority.value, 'test');
            console.log(editTask);
            const taskKey2 = editKey;
            localStorage.setItem(taskKey2, JSON.stringify(editTask));
            closeModal();
            fetchTasks();
        } else {
            editForm.reportValidity();
            console.log('INVALID');
        }
    });
}

class Task {
    constructor(title, details, date, priority, project) {
        this.title = title;
        this.details = details;
        this.deadline = date;
        this.priority = priority;
        this.completion = false;
        this.project = project;
    }
    editTask(key) {

    }

} 

export const deleteTask = (deleteKey) => {
    localStorage.removeItem(deleteKey);
}