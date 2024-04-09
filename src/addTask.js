
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
    // priorityHandler();
    submit.addEventListener('click', (event) => {   
        // event.preventDefault();   
        // if (title.validity.valid && date.validity.valid && activePriority !== null) {
            
            // console.log('THROUGH');
        // } else {console.log('NOT THROUGH');}
    });

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