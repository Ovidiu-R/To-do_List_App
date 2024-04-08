import './style.css';
import { initialiseLocalStorage } from './initialiseLocalStorage';
import { screenController } from './screenController';

// document.addEventListener('DOMContentLoaded', () => {

// const modal = document.querySelector('dialog'); 
// const button = document.getElementById('all');
// button.addEventListener('click', () => {
//     modal.showModal();
//     modal.classList.add('active');
// });

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         modal.classList.remove('active');
//         closeModal();
        
//     }
// });
screenController();
initialiseLocalStorage();
// const x = localStorage.getItem('testTask');
// const y = localStorage.getItem('testTask1');
// console.log(x, y);
// const a = JSON.parse(x);
// const b = JSON.parse(y);
// console.log(a,b);

// });