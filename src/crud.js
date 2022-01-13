const saveLocalStorage = (arr) => {
  localStorage.setItem('toDoList', JSON.stringify(arr));
};

const loadLocalStorage = (arr) => {
  const localToDoList = JSON.parse(localStorage.getItem('toDoList'));
  if (localToDoList) arr = localToDoList;
  return arr;
};

const addTask = (arr, task) => {
  arr.push({ id: arr.length + 1, description: task, completed: false });
  saveLocalStorage(arr);
};

const dropTask = (arr, taskIds) => {
  taskIds.forEach((idTask) => {
    arr = arr.filter((task) => task.id !== idTask);
  });

  arr = arr.map((task, ind) => {
    task.id = ind + 1;
    return task;
  });
  saveLocalStorage(arr);
};

const editTask = (arr, idTask, desc) => {
  arr[idTask - 1].description = desc;
  saveLocalStorage(arr);
};

export {
  saveLocalStorage, loadLocalStorage, addTask, dropTask, editTask,
};
