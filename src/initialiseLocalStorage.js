export const initialiseLocalStorage = () => {
    const testTask1 = {
        title: 'BLAH',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'test'
    };
    const testTask2 = {
        title: 'Shopping',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium'
        project: 'test'
    };
    const testTask3 = {
        title: 'Shopping',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'test'
    };
    const testTask4 = {
        title: 'Shopping',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'test'
    };
    const testTask5 = {
        title: 'Shopping',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'test'
    };
    const testTask6 = {
        title: 'Shopping',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'test'
    };
    
    localStorage.setItem('testTask1', JSON.stringify(testTask1));
    localStorage.setItem('testTask2', JSON.stringify(testTask2));
    localStorage.setItem('testTask3', JSON.stringify(testTask3));
    localStorage.setItem('testTask4', JSON.stringify(testTask4));
    localStorage.setItem('testTask5', JSON.stringify(testTask5));
    localStorage.setItem('testTask6', JSON.stringify(testTask6));
}

