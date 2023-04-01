import './style.css';
import {
  loadTasks,
  addTask,
  deleteTaks,
  updateTaks,
  deleteAllTaks,
} from './modules/functions.js';
import changeStatus from './modules/statusUpdate.js';

const ul = document.querySelector('.ul');
loadTasks(localStorage.getItem('lists'), ul);
const addInput = document.querySelector('.add-input form');
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
const clearAll = document.querySelector('.btn-clear button');
clearAll.addEventListener('click', () => {
  deleteAllTaks(ul);
});
