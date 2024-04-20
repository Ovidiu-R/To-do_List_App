import { openTaskModal, openEditModal, closeModal, fetchTasks } from './displayHandler';
import { resetDisplay } from './displayHandler';
import { addTask, editTask } from './taskHandler';
import { deleteTask } from './taskHandler';
import { initialiseLocalStorage } from './initialiseLocalStorage';



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
                    let editKey = e.target.parentElement.getAttribute('id');
                    console.log(editKey);
                    openEditModal(editKey);
                    editTask(editKey);
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