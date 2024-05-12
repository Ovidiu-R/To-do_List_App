import "./style.css";
import { initialiseLocalStorage } from "./initialiseLocalStorage";
import { interactivityHandler } from "./interactivityHandler";
import { displayTasks, displayProjects } from "./displayHandler";
import { fetchTasks, sortByDate } from "./taskHandler";

interactivityHandler();
initialiseLocalStorage();
const taskArray = fetchTasks();
const sortedArray = sortByDate(taskArray);
displayTasks(sortedArray);
displayProjects();
