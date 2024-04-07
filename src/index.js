import './style.css';

document.addEventListener('DOMContentLoaded', () => {

const modal = document.querySelector('dialog'); 
const button = document.getElementById('all');
button.addEventListener('click', () => {
    modal.showModal();
    modal.classList.add('active');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
        closeModal();
        
    }
});


});