import { parseISO, format } from 'date-fns';

const content = document.getElementById('content');


export const fetchTasks = () => {
    content.textContent = '';
    sortByDate();
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const parsedTask = JSON.parse(value);
        displayTasks(key, parsedTask);
        
    }
}

const displayTasks = (key, task) => {
    if (key !== 'firstSetup') {
        const container = document.createElement('div');
        container.setAttribute('class', 'task');
        container.setAttribute('id', key);
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        if (task.completion === true) {
            checkbox.checked = true;
        }
        const title = document.createElement('p');
        title.textContent = task.title;
        const details = document.createElement('button');
        details.textContent = 'Details';
        const date = document.createElement('p');
        date.textContent = task.deadline;
        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        const erase = document.createElement('button');
        erase.classList.add('erase');
        erase.textContent = 'Erase';
        container.append(checkbox, title, details, date, edit, erase);
        content.append(container);
    }
}

const sortByDate = () => {
    const localStorageArray = new Array();
    for (let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = localStorage.getItem(key);
        let parsedItem = JSON.parse(item);
        localStorageArray[i] = parsedItem.deadline + key + item;
    }
    console.log('before', localStorageArray);

    localStorageArray.sort(function(a, b) {
        let dateA = formatDate(a.substring(0, 10));
        let dateB = formatDate(b.substring(0, 10));
        console.log ('a', dateA);
        console.log ('b', dateB);
        // console.log ('WTF', new Date(2024/3/15));
        return dateA - dateB;
    });

    console.log('after', localStorageArray);
}

const formatDate = (rawDate) => {
    const [day, month, year] = rawDate.split('/')
    const formattedDate = year + '-' + month + '-' + day;
    return new Date(formattedDate);
}

export const resetDisplay = () => {
    localStorage.clear();
}