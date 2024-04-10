import { v4 as uuidv4 } from 'uuid';
const title = document.getElementById('title');
const details = document.getElementById('details');
const date = document.getElementById('date');
const submit = document.getElementById('addTask');
const form = document.querySelector('form');
const radioButtons = document.querySelectorAll("input[name='priority']");

export const addTask = () => {
    dataValidityChecker();
    // writeLocalStorage();
}

const dataValidityChecker = () => {
    submit.addEventListener('click', (event) => { 
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (form.checkValidity()){
            const newTask = new Task(title.value, details.value, date.value, priority.value, 'test');
            console.log(newTask);
            const taskKey = uuidv4();
            localStorage.setItem(taskKey, JSON.stringify(newTask));
            closeModal();
            modal.close();
            modal.classList.remove('active');
            // modal.style.display = 'none';
        } else {
            form.reportValidity();
            console.log('INVALID');}

        
    });

}

function closeModal() {
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
        this.project = project;
    }


} 

// const writeLocalStorage()