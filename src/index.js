import './style.css';
import {
  loadTasks,
  addTask,
  deleteTaks,
  updateTaks,
  changeStatus,
} from './modules/functions.js';

const ul = document.querySelector('ul');
loadTasks(localStorage.getItem('lists'), ul);
const addInput = document.querySelector('.add-input form');
addInput.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(document.querySelector('#new-item'), ul);
  deleteTaks(ul);
  updateTaks();
  changeStatus();
});
deleteTaks(ul);
updateTaks();
changeStatus();
