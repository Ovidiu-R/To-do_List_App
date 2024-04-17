// import { parseISO, format } from 'date-fns';

const content = document.getElementById('content');


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