export const initialiseLocalStorage = () => {
    if (localStorage.getItem('firstSetup') === null) {
        const firstSetup = true;
        const testTask1 = {
            title: 'Feed the cat!',
            details: 'Must feed Muffin by 9am otherwise she will tear the entire house apart.',
            deadline: '2024-04-15',
            priority: 'medium',
            completion: true,
            project: 'default'
        };
        const testTask2 = {
            title: 'Shopping',
            details: 'Must buy milk, bread, sausages, eggs and honey for the wifey',
            deadline: '2024-04-16',
            priority: 'medium',
            completion: false,
            project: 'default'
        };
        const testTask3 = {
            title: 'Pay council tax',
            details: 'Any delays will slap a fine on top of the amount due',
            deadline: '2024-04-18',
            priority: 'high',
            completion: true,
            project: 'default'
        };
        const testTask4 = {
            title: 'Mega DnD session',
            details: 'Set aside 8 hours and acquire pelnty of snacks to keep me going',
            deadline: '2024-04-19',
            priority: 'medium',
            completion: false,
            project: 'default'
        };
        const testTask5 = {
            title: 'Workout',
            details: 'Weighted dips, bodyweight rows and overhead press',
            deadline: '2024-04-15',
            priority: 'high',
            completion: false,
            project: 'default'
        };
        const testTask6 = {
            title: 'Hoover living room',
            details: '',
            deadline: '2024-04-12',
            priority: 'medium',
            completion: false,
            project: 'default'
        };
        
        localStorage.setItem('firstSetup', JSON.stringify(firstSetup));
        localStorage.setItem('testTask1', JSON.stringify(testTask1));
        localStorage.setItem('testTask2', JSON.stringify(testTask2));
        localStorage.setItem('testTask3', JSON.stringify(testTask3));
        localStorage.setItem('testTask4', JSON.stringify(testTask4));
        localStorage.setItem('testTask5', JSON.stringify(testTask5));
        localStorage.setItem('testTask6', JSON.stringify(testTask6));
    }
};

