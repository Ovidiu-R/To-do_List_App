import { v4 as uuidv4 } from 'uuid';
import { fetchTasks } from './displayHandler';
import { closeModal } from './displayHandler';

export const addTask = () => {
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    const submit = document.getElementById('submit');
    const form = document.querySelector('form');
    // const radioButtons = document.querySelectorAll("input[name='priority']");

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
            console.log('INVALID');}
    
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