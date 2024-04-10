
const title = document.getElementById('title');
const details = document.getElementById('details');
const date = document.getElementById('date');

const submit = document.getElementById('addTask');
    

export const addTask = () => {
    dataValidityChecker();
    // writeLocalStorage();
}

const dataValidityChecker = () => {
    submit.addEventListener('click', (event) => { 
        let priority = document.querySelector("input[name='priority']:checked"); 
        // event.preventDefault();   
        console.log(priority);
        if (priority !== null) {
            const newTask = new Task(title.value, details.value, date.value, priority.value, 'test');
            console.log(newTask);
            localStorage.setItem('test', JSON.stringify(testTask));
            // modal.close();
        } else {console.log('AAAAAAAAAAAAAAAA')}
        
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