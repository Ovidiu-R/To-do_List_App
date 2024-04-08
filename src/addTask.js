
const title = document.getElementById('title');
const details = document.getElementById('details');
const date = document.getElementById('date');
const priorityButtons = document.querySelectorAll('.option');
let activePriority = null;
const submit = document.getElementById('addTask');
    

export const addTask = () => {
    dataValidityChecker();
    // writeLocalStorage();
}

const dataValidityChecker = () => {
    priorityHandler();
    if (/*title.validity.valid && date.validity.valid &&*/ activePriority !== null) {
        console.log('TEST');

        submit.addEventListener('click', (event) => {      
            event.preventDefault();
            // const newTask = new Task(title.value, details.value, date.value, activePriority.value, "test");
            // console.log(newTask);
            console.log('TEST');
        }, flase);
    } else {console.log('fuck')}
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
            console.log(activePriority);

        });
    });
}