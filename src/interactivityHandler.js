import { fetchTasks } from './displayHandler';
import { addTask } from './taskHandler';
import { deleteTask } from './taskHandler';

export const interactivityHandler = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.querySelector('dialog'); 
        document.addEventListener('click', function(e) {
            switch(true) {
                case (e.target.id === 'addNew'):
                    modal.showModal();
                    modal.classList.add('active');
                    addTask();
                case (e.target.classList.contains('erase')):
                    let deleteKey = e.target.parentElement.getAttribute('id');
                    deleteTask(deleteKey);
                    fetchTasks();
            }
        });
    });
}