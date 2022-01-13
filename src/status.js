import * as CRUD from './crud.js';

export default (arr, taskId, status) => {
  arr[taskId - 1].completed = status;
  CRUD.saveLocalStorage(arr);
};
