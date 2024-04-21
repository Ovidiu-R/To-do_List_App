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
        // event.stopImmediatePropagation();
    });
}

export const editTask = (editKey) => {
    const titleEdit = document.getElementById('editTitle');
    const detailsEdit = document.getElementById('editDetails');
    const dateEdit = document.getElementById('editDate');
    const submitEdit = document.getElementById('editSubmit');
    const editForm = document.getElementById('editTaskForm');
    console.log('initial edit key', editKey);
    
   //The function must be written first before it is called, otherwise it will throw an uncaught reference error
   //Removing the eventListener after the code has been run ensures that there will only ever be one active at any given time    

    const handleSubmission = (event) => {
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (editForm.checkValidity()){
            const editTask = new Task(titleEdit.value, detailsEdit.value, dateEdit.value, priority.value, 'test');
            console.log('editTask', editTask);
            console.log('editKey', editKey);
            localStorage.setItem(editKey, JSON.stringify(editTask));
            closeModal();
            fetchTasks();
        } else {
            editForm.reportValidity();
            console.log('INVALID');
        }
        
        event.stopImmediatePropagation();
        submitEdit.removeEventListener('click', handleSubmission);
    };
    submitEdit.addEventListener('click', handleSubmission);
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
    // editTask(key) {

    // }

} 

export const deleteTask = (deleteKey) => {
    localStorage.removeItem(deleteKey);
}