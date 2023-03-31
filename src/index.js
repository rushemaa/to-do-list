import './style.css';
import arrowReapeat from './assets/arrow-repeat.svg';
import threeDots from './assets/three-dots-vertical.svg';

const simpleTasks = [
  { description: 'wash the dishes', completed: false, index: 1 },
  { description: 'complete To Do List project', completed: false, index: 2 },
];
simpleTasks.sort((a, b) => {
  if (a.index > b.index) return 1;
  if (a.index < b.index) return -1;
  return 0;
});
const toDoList = (listData) => {
  let lists = `<li class="li-header"><h2>Today's To Do </h2><img class="right-icons" cl src="${arrowReapeat}"></li>`;
  lists
    += '<li class="add-input"><form> <input id="new-item" class="new-item" placeholder="Add to your list..." type="text"> <input id="submit-new-item" type="submit" tabindex="-1" value="" title="click this or press enter to submit" class="icon-return"> </form></li>';
  listData.forEach((list) => {
    const { description } = list;
    lists += `<li class='tasks'><div><input class='checkboxs' type='checkbox' /><textarea>${description}</textarea></div> <img class="right-icons" src="${threeDots}"></li>`;
  });
  lists
    += '<li class="btn-clear"><button type="button">Clear all completed</button></li>';
  return lists;
};

document.querySelector('ul').innerHTML = toDoList(simpleTasks);
