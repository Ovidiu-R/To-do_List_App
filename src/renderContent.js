const content = document.getElementById('content');

export const renderContent = () => {
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
    container.setAttribute('class', '.task');
    container.setAttribute('id', key);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const title = document.createElement('p');
    title.setAttribute('value', 'HAHAHAHAHA')
    const details = document.createElement('button');
    const date = document.createElement('p');
    const edit = document.createElement('button');
    const erase = document.createElement('button');
    container.append(checkbox, title, details, date, edit, erase);
    content.textContent = '';
    content.append(container);
}