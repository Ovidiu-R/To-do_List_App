export const initialiseLocalStorage = () => {
    const testTask1 = {
        title: 'Feed the cat!',
        description: 'Must feed Muffin by 9am otherwise she will tear the entire house apart.',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'default'
    };
    const testTask2 = {
        title: 'Shopping',
        description: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'default'
    };
    const testTask3 = {
        title: 'Pay council tax',
        description: 'Any delays will slap a fine on top of the amount due',
        deadline: '15/04/2024',
        priority: 'high',
        project: 'default'
    };
    const testTask4 = {
        title: 'Mega DnD session',
        description: 'Set aside 8 hours and acquire pelnty of snacks to keep me going',
        deadline: '19/04/2024',
        priority: 'medium',
        project: 'default'
    };
    const testTask5 = {
        title: 'Workout',
        description: 'Weighted dips, bodyweight rows and overhead press',
        deadline: '15/04/2024',
        priority: 'high',
        project: 'default'
    };
    const testTask6 = {
        title: 'Hoover living room',
        description: '',
        deadline: '15/04/2024',
        priority: 'medium',
        project: 'default'
    };
    
    localStorage.setItem('testTask1', JSON.stringify(testTask1));
    localStorage.setItem('testTask2', JSON.stringify(testTask2));
    localStorage.setItem('testTask3', JSON.stringify(testTask3));
    localStorage.setItem('testTask4', JSON.stringify(testTask4));
    localStorage.setItem('testTask5', JSON.stringify(testTask5));
    localStorage.setItem('testTask6', JSON.stringify(testTask6));
};

