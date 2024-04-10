import './style.css';
import { initialiseLocalStorage } from './initialiseLocalStorage';
import { screenController } from './screenController';
import { renderContent } from './renderContent';

screenController();
initialiseLocalStorage();
renderContent();