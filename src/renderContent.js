const content = document.getElementById('content');

export const renderContent = () => {
    content.textContent = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const parsedTask = JSON.parse(value);
        // console.log(parsedTask.title);
        createElements(key, parsedTask);
        
    }
}
const createElements = (key, task) => {
    const container = document.createElement('div');
    container.setAttribute('class', 'task');
    container.setAttribute('id', key);
    // container.setAttribute('data-key', )
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
    date.textContent = task.date;
    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    const erase = document.createElement('button');
    erase.classList.add('erase');
    erase.textContent = 'Erase';
    container.append(checkbox, title, details, date, edit, erase);
    content.append(container);
}
