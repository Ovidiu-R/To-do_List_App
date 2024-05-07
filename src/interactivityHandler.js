import { openTaskModal, openEditModal, closeModal, fetchTasks, viewDetails, displayProjects, displayEmptyProjectOptions } from './displayHandler';
import { resetDisplay, openTaskForm, openProjectForm } from './displayHandler';
import { addTask, editTask, taskCompletionTrigger, deleteTask, addProject, deleteProject, setActiveProject } from './taskHandler';
import { positiveProjectCounter, setActiveDateFilter } from './taskHandler';
import { initialiseLocalStorage } from './initialiseLocalStorage';

/*The insidious problem of multiple event listeners being attached to the same element, leading to unpredictable 
problems has reared its ugly head again. Making use of stopImmediatePropagation() 
seems to have stopped one of the issue, to do with input focus, but the key duplication issue remains for now*/

export const interactivityHandler = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', function(e) {
            switch(true) { 
                case (e.target.classList.contains('addNew')):       //OPEN DIALOG MODAL TO ADD TASK/PROJECT
                    openTaskModal();
                    addTask();
                    break;
                case (e.target.id === 'submitProject'):             //SUBMIT PROJECT
                    e.preventDefault();
                    addProject();
                    fetchTasks();
                    e.stopImmediatePropagation();
                    break;
                case (e.target.classList.contains('erase')):        //ERASE TASK
                    const deleteKey = e.target.parentElement.getAttribute('id');
                    deleteTask(deleteKey);
                    break;
                case (e.target.id === 'reset'):
                    resetDisplay();                                 //RESET TO DEFAULT VALUES
                    initialiseLocalStorage();
                    fetchTasks();
                    displayProjects();
                    break;
                case (e.target.classList.contains('edit')):         //EDIT TASK
                    const editKey = e.target.parentElement.getAttribute('id');
                    openEditModal(editKey);
                    editTask(editKey);
                    break;
                case (e.target.classList.contains('completion')):   //CHECK TASK COMPLETION
                    const checkKey = e.target.parentElement.getAttribute('id');
                    taskCompletionTrigger(checkKey);
                    break;
                case (e.target.classList.contains('taskDetails')):  //VIEW TASK DETAILS
                    const detailKey = e.target.parentElement.getAttribute('id');
                    viewDetails(detailKey);
                    break;
                case (e.target.id === 'closeDetails'):              //CLOSE DETAILS
                    closeModal();
                    break;
                case (e.target.classList.contains('modalCloseButton')):
                    closeModal();
                    break;
                case (e.target.id === 'taskButton'):                //OPEN TASK FORM
                    openTaskForm();
                    e.stopImmediatePropagation();
                    break;
                    case (e.target.id === 'projectButton'):         //OPEN PROJECT FORM
                    openProjectForm();
                    e.stopImmediatePropagation();
                    break;
                case (e.target.classList.contains('projectButton')): //SELECT PROJECT / FILTER BY PROJECT
                    const selectedProject = e.target.id;
                    setActiveProject(selectedProject);
                    console.log(positiveProjectCounter(selectedProject));
                    if (positiveProjectCounter(selectedProject)){
                        fetchTasks();
                    } else {
                        displayEmptyProjectOptions();
                    }
                    setActiveDateFilter(undefined);
                    break;
                case (e.target.id === 'deleteProject'):             //DELETE PROJECT
                    deleteProject();
                    displayProjects();
                    setActiveProject(undefined);
                    fetchTasks();
                    break;
                // case (e.target.id === 'all'):                       //SHOW ALL TASKS
                //     // setActiveProject(undefined);
                //     fetchTasks();
                //     break;
                case (e.target.classList.contains('filterButtons')):
                    const buttonId = e.target.id;
                    setActiveDateFilter(buttonId);
                    setActiveProject(undefined);
                    fetchTasks();
                    break;
                

            }
        });
        document.addEventListener('keydown', (e) => {               //MANUALLY ENABLE MODAL CLOSURE ON ESCAPE PRESS
            if (e.key === 'Escape') {
                closeModal();            
            }
        });
    });
}