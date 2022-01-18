import * as LS from './localStorage.js';

const addTask = (arr, task) => {
  arr.push({ id: arr.length + 1, description: task, completed: false });
  LS.saveLocalStorage(arr);
};

const dropTask = (arr, taskIds) => {
  taskIds.forEach((idTask) => {
    arr = arr.filter((task) => task.id !== idTask);
  });

  arr = arr.map((task, ind) => {
    task.id = ind + 1;
    return task;
  });
  LS.saveLocalStorage(arr);
};

const editTask = (arr, idTask, desc) => {
  arr[idTask - 1].description = desc;
  LS.saveLocalStorage(arr);
};

const updateStatusTask = (arr, taskId, status) => {
  arr[taskId - 1].completed = status;
  LS.saveLocalStorage(arr);
};

export {
  addTask, dropTask, editTask, updateStatusTask,
};
