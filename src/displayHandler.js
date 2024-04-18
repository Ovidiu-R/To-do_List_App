// import { parseISO, format } from 'date-fns';
const modal = document.querySelector('.taskModal');
const content = document.getElementById('content');
const title = document.querySelectorAll('.title');
const details = document.querySelectorAll('.details');
const date = document.querySelectorAll('.date');
// const submit = document.getElementById('submit');
// const form = document.querySelector('form');
const radioButtons = document.querySelectorAll("input[name='priority']");
const editModal = document.querySelector('.editModal');

export const fetchTasks = () => {
    content.textContent = '';
    const sortingArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const parsedTask = JSON.parse(value);
        if (key === 'firstSetup') {
            sortingArray.push({key: 'firstSetup', deadline: '1999-01-01'});
        } else {
        sortingArray.push(Object.assign(parsedTask, {key: key}))
        }
    }
    sortingArray.sort(function(a, b) {
        let dateA = new Date(a.deadline);
        let dateB = new Date(b.deadline);
        return (dateA - dateB);
    }); 
    displayTasks(sortingArray);
    console.log(sortingArray);

}

const displayTasks = (sortingArray) => {
    sortingArray.forEach(object => {
        if (object.key !== 'firstSetup') {
                const container = document.createElement('div');
                container.setAttribute('class', 'task');
                container.setAttribute('id', object.key);
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                if (object.completion === true) {
                    checkbox.checked = true;
                }
                const title = document.createElement('p');
                title.textContent = object.title;
                const details = document.createElement('button');
                details.textContent = 'Details';
                const date = document.createElement('p');
                date.textContent = object.deadline;
                const edit = document.createElement('button');
                edit.classList.add('edit');
                edit.textContent = 'Edit';
                const erase = document.createElement('button');
                erase.classList.add('erase');
                erase.textContent = 'Erase';
                container.append(checkbox, title, details, date, edit, erase);
                content.append(container);
        }
    });
}

export const resetDisplay = () => {
    localStorage.clear();
}

export const openTaskModal = () => {
    modal.showModal();
    modal.classList.add('active');
}

export const openEditModal = (editKey) => {
    const editTitle = document.getElementById('editTitle');
    const editDetails = document.getElementById('editDetails');
    const editDate = document.getElementById('editDate');
    const taskToEdit = JSON.parse(localStorage.getItem(editKey));
    editModal.showModal();
    editTitle.value = taskToEdit.title;
    editDetails.value = taskToEdit.title;
    editDate.value = taskToEdit.title;
}

export const closeModal = () => {
    const editTitle = document.querySelector('editTitle');

    modal.close();
    modal.classList.remove('active');
    title.forEach(title => {
        title.value = '';
    });
    details.forEach(details => {
        details.value = '';
    });
    date.forEach(date => {
        date.value = '';
    });
    
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
}