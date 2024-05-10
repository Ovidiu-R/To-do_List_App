import { v4 as uuidv4 } from 'uuid';
import { closeModal, displayTasks, displayProjects, displayEmptyProjectOptions } from './displayHandler';

export const addTask = () => {
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const date = document.getElementById('date');
    const submit = document.getElementById('submit');                           //This function could do with refactoring
    const form = document.getElementById('newTaskForm');    

    const handleNewSubmission = (event) => {
        const activeProject = document.querySelector('.activeProject');   
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
            const taskArray = fetchTasks(activeProjectId);
            const dailyTasks = filterByDate(taskArray, 'day');
            const weeklyTasks = filterByDate(taskArray, 'week');
            let sortedArray = sortByDate(taskArray);
            if (!activeProject){
                if (dailyTasks.some(task => task.key === taskKey)){
                    sortedArray = sortByDate(dailyTasks);
                    setActiveDateFilter('day');
                } else if (weeklyTasks.some(task => task.key === taskKey)){
                    sortedArray = sortByDate(weeklyTasks);
                    setActiveDateFilter('week');
                }
            }
            
            displayTasks(sortedArray);
            incrementProjectCounter(activeProjectId);
            displayProjects(activeProjectId);
            setActiveProject(activeProjectId);
        } else {
            form.reportValidity();
        }
        event.stopImmediatePropagation();
        submit.removeEventListener('click', handleNewSubmission);
    }
    submit.addEventListener('click', handleNewSubmission); 

}

export const fetchTasks = () => {
    const activeProject = document.querySelector('.activeProject');         //fetchTasks used to take as a parameter the projectId of the selected project button and, comparing
    let selectedProjectId = undefined;                                      //it to the parsedTask.project, filter the right tasks when the function is called. 
    if (activeProject !== null) {
        selectedProjectId = activeProject.id;
    }
    const sortingArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        const currentKey = localStorage.key(i);
        const value = localStorage.getItem(currentKey);
        const parsedTask = JSON.parse(value);
        if (currentKey === 'projectArray'){
            console.log('');
        } else if (currentKey === 'firstSetup') {
            sortingArray.push({key: 'firstSetup', deadline: '1999-01-01'});
        } else if (selectedProjectId === undefined){
            sortingArray.push(Object.assign(parsedTask, {key: currentKey}));       //REDUNDANCY?
        } else if (parsedTask.project === selectedProjectId){
            sortingArray.push(Object.assign(parsedTask, {key: currentKey}));
        }
    }
    return sortingArray;
   

}

export const filterByDate = (taskArray, filterId) => {
    const currentDate = new Date();
    var normalisedCurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    if (filterId === 'day'){
        const dailyTasks = taskArray.filter(task => {
            const taskDeadline = new Date(task.deadline);
            const normalisedTaskDeadline = new Date(taskDeadline.getFullYear(), taskDeadline.getMonth(), taskDeadline.getDate());
            return (normalisedTaskDeadline.getFullYear() === normalisedCurrentDate.getFullYear() &&
                    normalisedTaskDeadline.getMonth() === normalisedCurrentDate.getMonth() &&
                    normalisedTaskDeadline.getDate() === normalisedCurrentDate.getDate()     
            );
        });
        return dailyTasks;
    } else if (filterId === 'week'){
        const dayOfWeek = currentDate.getDay();
        const weekStart = currentDate.getDate() - dayOfWeek;
        const weekEnd = weekStart + 6;
        const weeklyTasks = taskArray.filter(task => {
            const taskDeadline = new Date(task.deadline);
            const normalisedTaskDeadline = new Date(taskDeadline.getFullYear(), taskDeadline.getMonth(), taskDeadline.getDate());
            return (normalisedTaskDeadline.getFullYear() === normalisedCurrentDate.getFullYear() &&
                    normalisedTaskDeadline.getMonth() === normalisedCurrentDate.getMonth() &&
                    normalisedTaskDeadline.getDate() >= weekStart &&
                    normalisedTaskDeadline.getDate() <= weekEnd    
                    
            )
        });
        return weeklyTasks;
    } else {
        return taskArray;
    }

}

export const sortByDate = (sortingArray) => {
    sortingArray.sort(function(a, b) {
        let dateA = new Date(a.deadline);
        let dateB = new Date(b.deadline);
        return (dateA - dateB);
    }); 
    return sortingArray;
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
    console.log(selectedProjectId);
    const projectButtons = document.querySelectorAll('.projectButton');
    projectButtons.forEach(project => {
        project.classList.remove('activeProject');
    });
    if (selectedProjectId !== undefined) {
        const activeProject = document.getElementById(selectedProjectId);
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
            displayProjects();
            setActiveProject(projectTitle);
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
            const taskArray = fetchTasks();
            const sortedArray = sortByDate(taskArray);
            displayTasks(sortedArray);
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
    const activeDateFilter = document.querySelector('.activeDateFilter');
    localStorage.removeItem(deleteKey);
    decrementProjectCounter(taskToDelete.project);
    switch (true) {
        case (taskToDelete.project === undefined):
            console.log(activeDateFilter.id);
            displayTasks(sortByDate(filterByDate(fetchTasks(), activeDateFilter.id)));
            break;
        case (positiveProjectCounter(taskToDelete.project)):
            displayProjects();
            if (activeDateFilter === null){
                displayTasks(sortByDate(fetchTasks()));
                setActiveProject(taskToDelete.project);
            } else {
                displayTasks(sortByDate(filterByDate(fetchTasks(), activeDateFilter.id)));
            }
            break;
        case (true):
            displayEmptyProjectOptions();
            displayProjects();
            setActiveDateFilter(undefined);
            setActiveProject(taskToDelete.project);
            break;
    }
    
}