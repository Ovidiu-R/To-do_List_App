import { openTaskModal, openEditModal, closeModal, fetchTasks } from './displayHandler';
import { resetDisplay } from './displayHandler';
import { addTask, editTask } from './taskHandler';
import { deleteTask } from './taskHandler';
import { initialiseLocalStorage } from './initialiseLocalStorage';

/*The insidious problem of multiple event listeners being attached to the same element, leading to unpredictable problems has reared its ugly head again
Making use of stopImmediatePropagation() seems to have stopped one of the issue, to do with input focus, but the key duplication issue remains for now*/

export const interactivityHandler = () => {
    document.addEventListener('DOMContentLoaded', () => {
        // const modal = document.querySelector('dialog'); 
        document.addEventListener('click', function(e) {
            switch(true) {
                case (e.target.id === 'addNew'):
                    openTaskModal();
                    addTask();
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
                    console.log('edit key', editKey);
                    openEditModal(editKey);
                    editTask(editKey);
                    e.stopImmediatePropagation();
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