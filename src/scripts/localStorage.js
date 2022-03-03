const saveLocalStorage = (arr) => {
  localStorage.setItem('toDoList', JSON.stringify(arr));
};

const loadLocalStorage = () => {
  const localToDoList = JSON.parse(localStorage.getItem('toDoList'));
  if (localToDoList) return localToDoList;
  saveLocalStorage([]);
  return [];
};

export { saveLocalStorage, loadLocalStorage };