import './style.css';
import { initialiseLocalStorage } from './initialiseLocalStorage';
import { interactivityHandler } from './interactivityHandler';
import { fetchTasks } from './displayHandler';

interactivityHandler();
initialiseLocalStorage();
fetchTasks();