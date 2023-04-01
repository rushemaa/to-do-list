import './style.css';
import {
  loadTasks,
  addTask,
  deleteTaks,
  updateTaks,
  changeStatus,
  deleteAllTaks,
} from './modules/functions.js';

const ul = document.querySelector('ul');
loadTasks(localStorage.getItem('lists'), ul);
const addInput = document.querySelector('.add-input form');
const clearAll = document.querySelector('.btn-clear button');
addInput.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(document.querySelector('#new-item'), ul);
  deleteTaks(ul);
  updateTaks();
  changeStatus(ul);
});
deleteTaks(ul);
updateTaks();
changeStatus();
clearAll.addEventListener('click', () => {
  deleteAllTaks(ul);
});
