
const title = document.getElementById('title');
const details = document.getElementById('details');
const date = document.getElementById('date');
const priorityButtons = document.querySelectorAll('.option');
let activePriority = null;
const addNewTask = document.getElementById('addTask');
    

export const addTask = () => {
    dataValidityChecker();
    // writeLocalStorage();
}

const dataValidityChecker = () => {
    priorityHandler();
    if (title.checkValidity() && date.checkValidity() && activePriority !== null) {
        addNewTask.querySelector('click', () => {      
            const newTask = new Task(title.value, details.value, date.value, activePriority.value, "test");
            console.log(newTask);
            console.log('TEST');
        });
    }
}

class Task {
    constructor(title, details, date, priority, project) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
    }


} 

// const writeLocalStorage()

const priorityHandler = () => {
    priorityButtons.forEach(button=> {
        button.addEventListener('click', () => {
            priorityButtons.forEach(btn=> {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            activePriority = button;
        });
    });
}