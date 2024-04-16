import { fetchTasks } from './displayHandler';
import { resetDisplay } from './displayHandler';
import { addTask } from './taskHandler';
import { deleteTask } from './taskHandler';
import { initialiseLocalStorage } from './initialiseLocalStorage';


export const interactivityHandler = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.querySelector('dialog'); 
        document.addEventListener('click', function(e) {
            switch(true) {
                case (e.target.id === 'addNew'):
                    modal.showModal();
                    modal.classList.add('active');
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
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.classList.remove('active');
                modal.close();
                
            }
        });
    });
}