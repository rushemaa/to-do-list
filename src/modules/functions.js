import arrowReapeat from '../assets/arrow-repeat.svg';
import threeDots from '../assets/three-dots-vertical.svg';
import trach from '../assets/trash.svg';

export const loadTasks = (localS, ul) => {
  let lists = `<li class="li-header"><h2>Today's To Do </h2><img class="right-icons-h" cl src="${arrowReapeat}"></li>`;
  lists +=
    '<li class="add-input"><form> <input id="new-item" class="new-item" placeholder="Add to your list..." type="text"> <input id="submit-new-item" type="submit" tabindex="-1" value="" title="click this or press enter to submit" class="icon-return"> </form></li>';
  const simpleTasks = [];
  if (localS) {
    simpleTasks.push(...JSON.parse(localS));
    simpleTasks.sort((a, b) => {
      if (a.index > b.index) return 1;
      if (a.index < b.index) return -1;
      return 0;
    });
  }
  const toDoList = (listData) => {
    let lists = '';
    listData.forEach((list) => {
      const { description, completed, index } = list;
      lists += `<li class='tasks' ><div><input class='checkboxs' ${
        completed ? 'checked' : ''
      }  type='checkbox' id="status-${index}" value="${completed}" /><textarea id="edit-${index}">${description}</textarea></div> <img class="right-icons" id="remove-${index}" src="${threeDots}"></li>`;
    });
    lists +=
      '<li class="btn-clear"><button type="button">Clear all completed</button></li>';
    return lists;
  };

  ul.innerHTML = lists + toDoList(simpleTasks);
};

export function updateTaks() {
  const edit = [];
  if (localStorage.getItem('lists')) {
    edit.push(...JSON.parse(localStorage.getItem('lists')));
  }
  edit.forEach((task) => {
    const editField = document.getElementById(`edit-${task.index}`);
    editField.addEventListener('blur', () => {
      task.description = editField.value;
      localStorage.setItem('lists', JSON.stringify(edit));
    });
  });
}

export function changeStatus() {
  const editt = [];
  if (localStorage.getItem('lists')) {
    editt.push(...JSON.parse(localStorage.getItem('lists')));
  }
  editt.forEach((task) => {
    const check = document.getElementById(`status-${task.index}`);
    check.addEventListener('change', () => {
      const neww = editt.map((p) => {
        if (p.index === task.index) {
          return {
            description: p.description,
            completed: !p.completed,
            index: p.index,
          };
        }
        return p;
      });
      localStorage.setItem('lists', JSON.stringify(neww));
      changeStatus();
    });
  });
}

export function deleteTaks(ul) {
  const tobeDelate = [];
  if (localStorage.getItem('lists')) {
    tobeDelate.push(...JSON.parse(localStorage.getItem('lists')));
  }
  tobeDelate.forEach((task) => {
    const removeBtn = document.getElementById(`remove-${task.index}`);
    removeBtn.addEventListener('mouseover', () => {
      removeBtn.setAttribute('src', trach);
    });
    removeBtn.addEventListener('mouseout', () => {
      removeBtn.setAttribute('src', threeDots);
    });
    removeBtn.addEventListener('click', () => {
      const NewList = tobeDelate.filter(
        (element) => element.index !== task.index
      );
      localStorage.setItem('lists', JSON.stringify(NewList));
      loadTasks(JSON.stringify(NewList), ul);
      deleteTaks(ul);
      updateTaks();
      changeStatus();
    });
  });
}

export function deleteAllTaks(ul) {
  const tobeDelate = [];
  if (localStorage.getItem('lists')) {
    tobeDelate.push(...JSON.parse(localStorage.getItem('lists')));
  }
  const NewList = tobeDelate.filter((element) => element.completed !== true);
  localStorage.setItem('lists', JSON.stringify(NewList));
  loadTasks(JSON.stringify(NewList), ul);
  deleteTaks(ul);
  updateTaks();
}

export function addTask(description, ul) {
  const tasks = [];
  const localData = localStorage.getItem('lists');
  if (localData) {
    tasks.push(...JSON.parse(localStorage.getItem('lists')));
  }
  const descriptionData = description.value;
  const newIndex = tasks.length + 1;
  tasks.push({
    description: descriptionData,
    completed: false,
    index: newIndex,
  });
  description.value = '';
  const dataTolocal = JSON.stringify(tasks);
  localStorage.setItem('lists', dataTolocal);
  loadTasks(dataTolocal, ul);
  const addInput = document.querySelector('.add-input form');
  addInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(document.querySelector('#new-item'), ul);
    deleteTaks(ul);
    updateTaks();
    changeStatus();
  });
}
