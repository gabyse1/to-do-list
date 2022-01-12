import './style.css';

const taskList = document.querySelector('#task__list');
const toDoListArray = [{ id: 1, description: 'Double-tap to edit', completed: false },
{ id: 2, description: 'Drag and drop to reorder your list', completed: false },
{ id: 3, description: 'Manage all your lists in one place', completed: false },
{ id: 4, description: 'Resync to clear out the old', completed: false }];

const sortArray = () => {
  toDoListArray.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  });
};

const renderTaskList = () => {
  sortArray();
  toDoListArray.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task__list-item');
    taskListItem.setAttribute('data-taskid', task.id);
    const lisItemCheck = document.createElement('div');
    lisItemCheck.classList.add('list-item-check');
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('btn__task-checklist');
    checkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path
                d="M1,50.09c2.79-2.46,5.21-5.14,8.14-7,4.21-2.72,8.46-1.73,12.25,1.29C26,48,28.86,53,31.39,58.25c.74,1.52,1.42,3.06,2.08,4.5,6-8.13,11.79-16.27,17.92-24.13C58.09,30,65.5,22,74.28,15.44c5.44-4.08,11.19-7.64,18.16-8.32a39.55,39.55,0,0,1,6.33.37l.22.77c-.85.71-1.68,1.43-2.54,2.13C81.14,22.82,67.17,36.54,56.86,53.53c-3.77,6.21-6.66,12.94-10.12,19.34-2.6,4.81-5.26,9.61-8.29,14.15a13.11,13.11,0,0,1-8.74,5.88c-3.35.58-5-.44-6-3.69-2.82-9.22-6-18.3-10.88-26.67C9.36,56.53,7,54.06,1,50.09Z" />
            </svg>`;
    checkBtn.addEventListener('click', () => {
      checkBtn.classList.toggle('hide-checklist-btn');
    });
    lisItemCheck.appendChild(checkBtn);
    taskListItem.appendChild(lisItemCheck);

    const listItemView = document.createElement('div');
    listItemView.classList.add('list-item-view');
    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('txt__task-description');
    taskDescription.setAttribute('spellcheck', false);
    taskDescription.textContent = `${task.description}`;
    taskDescription.addEventListener('input', () => {
      taskDescription.style.height = `${taskDescription.scrollHeight}px`;
    });
    listItemView.appendChild(taskDescription);
    taskListItem.appendChild(listItemView);

    const listItemDots = document.createElement('div');
    listItemDots.classList.add('list-item-dots');
    const moveBtn = document.createElement('button');
    moveBtn.classList.add('btn__task-dragdrop');
    moveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.43 98">
              <path
                d="M48.85,99l-1.75-.41a12.23,12.23,0,1,1,4.67.21,3.81,3.81,0,0,0-.62.2Zm0-98a4,4,0,0,1-.62.2,12.19,12.19,0,1,0,4.67.21L51.15,1ZM50,37.79A12.21,12.21,0,1,0,62.21,50,12.26,12.26,0,0,0,50,37.79Z"
                transform="translate(-37.79 -1)" />
            </svg>`;
    listItemDots.appendChild(moveBtn);
    taskListItem.appendChild(listItemDots);
    taskList.appendChild(taskListItem);
  });
};

renderTaskList();

const taskForm = document.querySelector('#task__form');
const submitButton = document.querySelector('#task__submit');

const submitTask = () => {
};

taskForm.addEventListener('enter', (e) => {
  e.preventDefault();
  submitTask();
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  submitTask();
});