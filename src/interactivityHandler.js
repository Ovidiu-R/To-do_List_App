import { openTaskModal, openEditModal, closeModal, fetchTasks, viewDetails } from './displayHandler';
import { resetDisplay } from './displayHandler';
import { addTask, editTask, taskCompletionTrigger } from './taskHandler';
import { deleteTask } from './taskHandler';
import { initialiseLocalStorage } from './initialiseLocalStorage';

/*The insidious problem of multiple event listeners being attached to the same element, leading to unpredictable problems has reared its ugly head again
Making use of stopImmediatePropagation() seems to have stopped one of the issue, to do with input focus, but the key duplication issue remains for now*/

export const interactivityHandler = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', function(e) {
            switch(true) {
                case (e.target.id === 'addNew'):
                    openTaskModal();
                    addTask();
                    e.stopImmediatePropagation();
                    break;
                case (e.target.classList.contains('erase')):
                    let deleteKey = e.target.parentElement.getAttribute('id');
                    deleteTask(deleteKey);
                    fetchTasks();
                    break;
                case (e.target.id === 'reset'):
                    resetDisplay();
                    initialiseLocalStorage();
                    fetchTasks();
                    break;
                case (e.target.classList.contains('edit')):
                    const editKey = e.target.parentElement.getAttribute('id');
                    openEditModal(editKey);
                    editTask(editKey);
                    e.stopImmediatePropagation();
                    break;
                case (e.target.classList.contains('completion')):
                    const checkKey = e.target.parentElement.getAttribute('id');
                    taskCompletionTrigger(checkKey);
                    fetchTasks();
                    // e.stopImmediatePropagation();
                    break;
                case (e.target.classList.contains('details')):
                    const detailKey = e.target.parentElement.getAttribute('id');
                    viewDetails(detailKey);
                    break;
                case (e.target.id === 'closeDetails'):
                    closeModal();
                    break;
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();            
            }
        });
    });
}