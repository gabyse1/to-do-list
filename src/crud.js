import * as LS from './localStorage.js';
const today = new Date();

const addTask = (arr, task) => {
  arr.push({
    id: arr.length + 1, description: task, completed: false, date: today.getTime(),
  });
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

const updateOrderTask = (arr, newOrderIds) => {
  const newArr = [];
  newOrderIds.forEach((id, index) => {
    arr[id - 1].id = index + 1;
    newArr.push(arr[id - 1]);
  });
  LS.saveLocalStorage(newArr);
};

const resyncTask = (arr) => {
  const taskIds = [];
  arr.forEach((ele) => {
    const dateTask = new Date(ele.date).getTime();
    const dateToday = today.getTime();
    if ((dateToday - dateTask) > 3600000) taskIds.push(ele.id);
  });
  dropTask(arr, taskIds);
};

export {
  addTask, dropTask, editTask, updateStatusTask, updateOrderTask, resyncTask,
};
