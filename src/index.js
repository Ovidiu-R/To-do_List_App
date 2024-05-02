import './style.css';
import { initialiseLocalStorage } from './initialiseLocalStorage';
import { interactivityHandler } from './interactivityHandler';
import { fetchTasks, displayProjects } from './displayHandler';

interactivityHandler();
initialiseLocalStorage();
fetchTasks();
displayProjects();