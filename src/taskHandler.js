import { v4 as uuidv4 } from 'uuid';
import { fetchTasks, closeModal, displayProjects } from './displayHandler';

export const addTask = () => {
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    const submit = document.getElementById('submit');
    const form = document.getElementById('newTaskForm');
    const activeProject = document.querySelector('.activeProject');
    if (activeProject !== null) {
        var activeProjectId = activeProject.id;
    }

    const handleNewSubmission = (event) => {
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (form.checkValidity()){
            const newTask = new Task(title.value, details.value, date.value, priority.value, false, activeProjectId);
            const taskKey = uuidv4();
            localStorage.setItem(taskKey, JSON.stringify(newTask));
            closeModal();
            fetchTasks(activeProjectId);
        } else {
            form.reportValidity();
        }
        // event.stopImmediatePropagation();
        submit.removeEventListener('click', handleNewSubmission);
    }
    submit.addEventListener('click', handleNewSubmission); 

}

export const setActiveProject = (selectedProjectId) => {
    const activeProject = document.getElementById(selectedProjectId);
    const projectButtons = document.querySelectorAll('.projectButton');
    projectButtons.forEach(project => {
        project.classList.remove('activeProject');
    });
    activeProject.classList.add('activeProject');
}

export const addProject = () => {
    const projectForm = document.getElementById('newProjectForm');
    const projectTitle = document.getElementById('projectTitle');
    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
        const titleText = projectTitle.value;
        if (projectForm.checkValidity()){
            projectArray.push({name: `${titleText}`});
            localStorage.setItem('projectArray', JSON.stringify(projectArray));
            closeModal();
            displayProjects();
        } else {
            projectForm.reportValidity();
        }
}

export const editTask = (editKey) => {
    const titleEdit = document.getElementById('editTitle');
    const detailsEdit = document.getElementById('editDetails');
    const dateEdit = document.getElementById('editDate');
    const submitEdit = document.getElementById('editSubmit');
    const editForm = document.getElementById('editTaskForm');
    
   //The function must be written first before it is called, otherwise it will throw an uncaught reference error

    const handleEdit = (event) => {
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (editForm.checkValidity()){
            const editTask = new Task(titleEdit.value, detailsEdit.value, dateEdit.value, priority.value, false, 'test');
            localStorage.setItem(editKey, JSON.stringify(editTask));
            closeModal();
            fetchTasks();
        } else {
            editForm.reportValidity();
            console.log('INVALID');
        }

    //Removing the eventListener after the code has been run ensures that there will only ever be one active at any given time    
    
        // event.stopImmediatePropagation();
        submitEdit.removeEventListener('click', handleEdit);
    };
    submitEdit.addEventListener('click', handleEdit);
}

export const taskCompletionTrigger = (checkKey) => {
    const parsedTask = JSON.parse(localStorage.getItem(checkKey));
    const taskCompletion = !parsedTask.completion;
    const triggeredTask = new Task(parsedTask.title, parsedTask.details, parsedTask.deadline, parsedTask.priority, taskCompletion, parsedTask.project);
    localStorage.setItem(checkKey, JSON.stringify(triggeredTask));
    // fetchTasks();
}

class Task {
    constructor(title, details, date, priority, completion, project) {
        this.title = title;
        this.details = details;
        this.deadline = date;
        this.priority = priority;
        this.completion = completion;
        this.project = project;
    }

} 

export const deleteTask = (deleteKey) => {
    localStorage.removeItem(deleteKey);
}