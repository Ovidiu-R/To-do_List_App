import { v4 as uuidv4 } from 'uuid';
import { fetchTasks, closeModal, displayProjects, displayEmptyProjectOptions } from './displayHandler';

export const addTask = () => {
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    const submit = document.getElementById('submit');
    const form = document.getElementById('newTaskForm');
    

    const handleNewSubmission = (event) => {
        const activeProject = document.querySelector('.activeProject');         //The activeProject button must be accessed within the confines of the 
        let activeProjectId = undefined;
        if (activeProject !== null) {
            activeProjectId = activeProject.id;
        }
        const priority = document.querySelector("input[name='priority']:checked"); 
        event.preventDefault();   
        if (form.checkValidity()){
            const newTask = new Task(title.value, details.value, date.value, priority.value, false, activeProjectId);
            const taskKey = uuidv4();
            localStorage.setItem(taskKey, JSON.stringify(newTask));
            closeModal();
            fetchTasks(activeProjectId);
            incrementProjectCounter(activeProjectId);
            displayProjects(activeProjectId);
        } else {
            form.reportValidity();
        }
        event.stopImmediatePropagation();
        submit.removeEventListener('click', handleNewSubmission);
    }
    submit.addEventListener('click', handleNewSubmission); 

}

export const setActiveDateFilter = (dateFilterId) => {
    const activeFilter = document.getElementById(dateFilterId);
    const filterButtons = document.querySelectorAll('.filterButtons');
    filterButtons.forEach(button => {
        button.classList.remove('activeDateFilter');
    });
    if (dateFilterId !== undefined) {
        activeFilter.classList.add('activeDateFilter');
    }
}

export const positiveProjectCounter = (activeProjectId) => {
    console.log(activeProjectId)
    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
    return projectArray.some(project => project.name === activeProjectId && project.counter > 0);  // the some() method returns true if any of the array elements match the specified condition
}                                                                                                  

const incrementProjectCounter = (activeProjectId) => {
    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
    projectArray.forEach(project => {
        if (project.name === activeProjectId){                                          //
            project.counter += 1;
            localStorage.setItem('projectArray', JSON.stringify(projectArray));
        }
    });
}                                                                                       //CAN THESE TWO FUNCTIONS BE COMBINED TO AVOID REPETITION?

const decrementProjectCounter = (activeProjectId) => {
    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
    projectArray.forEach(project => {                                                   //
        if (project.name === activeProjectId){
            project.counter -= 1;
            localStorage.setItem('projectArray', JSON.stringify(projectArray));
        }
    });
}

export const setActiveProject = (selectedProjectId) => {
    const activeProject = document.getElementById(selectedProjectId);
    const projectButtons = document.querySelectorAll('.projectButton');
    projectButtons.forEach(project => {
        project.classList.remove('activeProject');
    });
    if (selectedProjectId !== undefined) {
        activeProject.classList.add('activeProject');
    }
}

export const addProject = () => {
    const projectForm = document.getElementById('newProjectForm');
    const projectInput = document.getElementById('projectTitle');
    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
        const projectTitle = projectInput.value;
        if (projectForm.checkValidity()){
            projectArray.push({name: `${projectTitle}`, counter: 0});                           //ADD COUNTER ATTRIBUTE
            localStorage.setItem('projectArray', JSON.stringify(projectArray));
            closeModal();
            displayProjects(projectTitle);

        } else {
            projectForm.reportValidity();
        }
}

export const deleteProject = () => {
    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
    const activeProject = document.querySelector('.activeProject'); 
    const updatedProjectArray = projectArray.filter(project => project.name !== activeProject.id);                                               
    localStorage.setItem('projectArray', JSON.stringify(updatedProjectArray));
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
            const oldTask = JSON.parse(localStorage.getItem(editKey));
            const editTask = new Task(titleEdit.value, detailsEdit.value, dateEdit.value, priority.value, false, oldTask.project);
            localStorage.setItem(editKey, JSON.stringify(editTask));
            closeModal();
            fetchTasks();
        } else {
            editForm.reportValidity();
            console.log('INVALID');
        }

    //Removing the eventListener after the code has been run ensures that there will only ever be one active at any given time    
    
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
    const taskToDelete = JSON.parse(localStorage.getItem(deleteKey));
    localStorage.removeItem(deleteKey);
    decrementProjectCounter(taskToDelete.project);
    if (positiveProjectCounter(taskToDelete.project)) {
        fetchTasks();
    } else {
        displayEmptyProjectOptions();
    }
    displayProjects(taskToDelete.project);
}