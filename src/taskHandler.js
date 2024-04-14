import { v4 as uuidv4 } from 'uuid';
import { fetchTasks } from './displayHandler';
const title = document.getElementById('title');
const details = document.getElementById('details');
const date = document.getElementById('date');
const submit = document.getElementById('submit');
const form = document.querySelector('form');
const radioButtons = document.querySelectorAll("input[name='priority']");

export const addTask = () => {
    submit.addEventListener('click', (event) => { 
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (form.checkValidity()){
            const newTask = new Task(title.value, details.value, date.value, priority.value, 'test');
            console.log(newTask);
            const taskKey = uuidv4();
            localStorage.setItem(taskKey, JSON.stringify(newTask));
            resetModal();
            modal.close();
            modal.classList.remove('active');
            fetchTasks();
            // modal.style.display = 'none';
        } else {
            form.reportValidity();
            console.log('INVALID');}
    
    });

}

function resetModal() {
    title.value = '';
    details.value = '';
    date.value = '';
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

class Task {
    constructor(title, details, date, priority, project) {
        this.title = title;
        this.details = details;
        this.date = date;
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