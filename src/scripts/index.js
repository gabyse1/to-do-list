import '../css/style.css';
import '../images/favicon.ico';
import '../images/tdl-screenshot-1200x627.png';
import * as LS from './localStorage.js';
import * as CRUD from './crud.js';

const taskForm = document.querySelector('#task__form');
const taskInput = document.querySelector('#task__input');
const removeButton = document.querySelector('#btn__clear-done-tasks');
const taskList = document.querySelector('#task__list');
const resyncButton = document.querySelector('#btn__resync-old-tasks');

const manageToDoListArray = (() => {
  let toDoListArray = [];
  return () => {
    toDoListArray = LS.loadLocalStorage();
    return toDoListArray;
  };
})();

const adjustTxtHeight = () => {
  const textElements = document.querySelectorAll('.txt__task-description');
  if (textElements) {
    textElements.forEach((elem) => {
      elem.style.height = `${elem.scrollHeight}px`;
    });
  }
};

const toggleTaskTools = (taskElement) => {
  const remBtn = taskElement.parentElement.nextSibling.firstChild;
  const dragBtn = taskElement.parentElement.nextSibling.lastChild;
  remBtn.classList.toggle('d-none');
  dragBtn.classList.toggle('d-none');
};

const updateTaskStatus = (checkElement) => {
  const taskId = checkElement.dataset.taskid;
  if (checkElement.classList.contains('checklist-active')) CRUD.updateStatusTask(manageToDoListArray(), taskId, true);
  else CRUD.updateStatusTask(manageToDoListArray(), taskId, false);
};

const sortTasks = () => {
  const taskIds = [];
  const elDom = taskList.querySelectorAll('.task__list-item');
  elDom.forEach((ele, index) => {
    taskIds.push(ele.getAttribute('data-taskid'));
    ele.setAttribute('data-taskid', index + 1);
  });
  CRUD.updateOrderTask(manageToDoListArray(), taskIds);
};

// DRAG FUNCTIONALITY
const getCurrentAfterElement = (y) => {
  const draggableElements = [...taskList.querySelectorAll('.task__list-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

const dragTasks = () => {
  const draggables = document.querySelectorAll('.task__list-item');
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      sortTasks();
    });
  });

  taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    const afterElement = getCurrentAfterElement(e.clientY);
    if (afterElement === null) taskList.appendChild(draggable);
    else taskList.insertBefore(draggable, afterElement);
  });
};

const renderTaskList = () => {
  const loadedToDoList = manageToDoListArray();
  taskList.innerHTML = '';
  loadedToDoList.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task__list-item');
    taskListItem.setAttribute('data-taskid', task.id);
    taskListItem.draggable = true;
    const lisItemCheck = document.createElement('div');
    lisItemCheck.classList.add('list-item-check');
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('btn__task-checklist');
    if (task.completed) checkBtn.classList.add('checklist-active');
    checkBtn.setAttribute('data-taskid', task.id);
    checkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path
                d="M1,50.09c2.79-2.46,5.21-5.14,8.14-7,4.21-2.72,8.46-1.73,12.25,1.29C26,48,28.86,53,31.39,58.25c.74,1.52,1.42,3.06,2.08,4.5,6-8.13,11.79-16.27,17.92-24.13C58.09,30,65.5,22,74.28,15.44c5.44-4.08,11.19-7.64,18.16-8.32a39.55,39.55,0,0,1,6.33.37l.22.77c-.85.71-1.68,1.43-2.54,2.13C81.14,22.82,67.17,36.54,56.86,53.53c-3.77,6.21-6.66,12.94-10.12,19.34-2.6,4.81-5.26,9.61-8.29,14.15a13.11,13.11,0,0,1-8.74,5.88c-3.35.58-5-.44-6-3.69-2.82-9.22-6-18.3-10.88-26.67C9.36,56.53,7,54.06,1,50.09Z" />
            </svg>`;
    checkBtn.addEventListener('click', () => {
      checkBtn.classList.toggle('checklist-active');
      updateTaskStatus(checkBtn);
    });
    lisItemCheck.appendChild(checkBtn);
    taskListItem.appendChild(lisItemCheck);

    const listItemView = document.createElement('div');
    listItemView.classList.add('list-item-view');
    listItemView.setAttribute('for', `txt__task-${task.id}`);
    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('txt__task-description');
    taskDescription.setAttribute('data-taskid', task.id);
    taskDescription.setAttribute('id', `txt__task-${task.id}`);
    taskDescription.setAttribute('spellcheck', false);
    taskDescription.textContent = `${task.description}`;
    taskDescription.addEventListener('input', () => {
      taskDescription.style.height = `${taskDescription.scrollHeight}px`;
      CRUD.editTask(manageToDoListArray(), +taskDescription.dataset.taskid, taskDescription.value);
    });
    taskDescription.addEventListener('focus', () => {
      toggleTaskTools(taskDescription);
    });
    taskDescription.addEventListener('blur', () => {
      setTimeout(() => { toggleTaskTools(taskDescription); }, 100);
    });
    listItemView.appendChild(taskDescription);
    taskListItem.appendChild(listItemView);

    const listItemTools = document.createElement('div');
    listItemTools.classList.add('list-item-tools');
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('btn__task-remove', 'd-none');
    trashBtn.setAttribute('data-taskid', task.id);
    trashBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.71 98">
              <path d="M23.22,33c-3.06-.51-5.27-1.88-4.78-5.18s3.18-3.7,6-3.69q27.22.06,54.44,0c2.67,0,4.93.63,5.38,3.59S83,32.38,80,32.79c-.09,0-.17.13-.52.42C78.34,47.33,77.15,61.68,75.95,76c-.43,5.15-.79,10.3-1.36,15.43C74,96.85,71.44,99,66,99H36.81c-5.61,0-8.09-2.07-8.66-7.81-1-9.92-1.78-19.86-2.62-29.79C24.74,52.06,24,42.72,23.22,33Zm38,52,2.57,3.34c1.13-1,3.1-1.86,3.25-3C69,70.55,70.68,55.76,72.41,41c.24-2.05-.44-4-2.61-3.79-1.2.14-3,2.08-3.14,3.39C64.76,54.86,63.13,69.17,61.26,84.94Zm-19.71.65L39.11,65c-1-8.23-1.86-16.46-3-24.66-.17-1.22-1.53-2.53-2.69-3.21-.48-.28-2.28.76-2.74,1.6a6.35,6.35,0,0,0-.19,3.5c1.65,14.19,3.27,28.38,5.15,42.54.17,1.28,2.06,2.34,3.15,3.5Zm12.76-23c0-7.2,0-14.41,0-21.61,0-2.12-.4-4-3-4s-2.91,2-2.91,4.08q0,21.61,0,43.23c0,2.13.41,4,3,4s2.92-2,2.91-4.07C54.31,77,54.32,69.77,54.31,62.56Z" transform="translate(-15.65 -1)"/>
              <path d="M80.21,6.61c-.76.62-2,2.4-3.49,2.76C58.13,13.73,39.49,17.9,20.85,22.08c-2.7.61-4.49-.59-5.07-3.26s.69-4.39,3.34-5c2.92-.7,5.84-1.42,8.78-2,2.43-.51,4.9-.67,5.62-3.88.18-.82,1.74-1.65,2.8-1.91,6.3-1.55,12.6-3.1,19-4.26,1.6-.29,3.45.88,5.2,1.29a9.26,9.26,0,0,0,3.55.53c3.66-.67,7.25-1.71,10.9-2.43C77.94.51,80.31,2.55,80.21,6.61Z" transform="translate(-15.65 -1)"/>
            </svg>`;
    trashBtn.addEventListener('click', () => {
      CRUD.dropTask(manageToDoListArray(), [+trashBtn.dataset.taskid]);
      renderTaskList();
    });
    listItemTools.appendChild(trashBtn);

    const moveBtn = document.createElement('button');
    moveBtn.classList.add('btn__task-dragdrop');
    moveBtn.setAttribute('data-taskid', task.id);
    moveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.43 98">
              <path
                d="M48.85,99l-1.75-.41a12.23,12.23,0,1,1,4.67.21,3.81,3.81,0,0,0-.62.2Zm0-98a4,4,0,0,1-.62.2,12.19,12.19,0,1,0,4.67.21L51.15,1ZM50,37.79A12.21,12.21,0,1,0,62.21,50,12.26,12.26,0,0,0,50,37.79Z"
                transform="translate(-37.79 -1)" />
            </svg>`;
    listItemTools.appendChild(moveBtn);
    taskListItem.appendChild(listItemTools);
    taskList.appendChild(taskListItem);
  });
  adjustTxtHeight();
  dragTasks();
};

// CRUD TASKS
const submitTask = () => {
  CRUD.addTask(manageToDoListArray(), taskInput.value);
  taskInput.value = '';
  renderTaskList();
};

const removeTasks = (checklist) => {
  const taskIds = [];
  checklist.forEach((task) => {
    taskIds.push(+task.dataset.taskid);
  });
  CRUD.dropTask(manageToDoListArray(), taskIds);
  renderTaskList();
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskInput.value !== '') submitTask();
});

removeButton.addEventListener('click', () => {
  removeTasks(document.querySelectorAll('.checklist-active'));
});

resyncButton.addEventListener('click', () => {
  CRUD.resyncTask(manageToDoListArray());
  renderTaskList();
});

resyncButton.addEventListener('mouseover', () => {
  const resyncMsg = document.querySelector('.btn__resync-old-task-msg');
  resyncMsg.classList.remove('hide__element');
});

resyncButton.addEventListener('mouseout', () => {
  const resyncMsg = document.querySelector('.btn__resync-old-task-msg');
  resyncMsg.classList.add('hide__element');
});

// START LOADING
window.addEventListener('load', () => {
  renderTaskList();
});
