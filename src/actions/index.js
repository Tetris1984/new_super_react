export const getAllTodo = (tasks) => {
  console.log('asd');
  return ({
    type: 'GET_TODOS',
    payload: tasks
  });
};

export const createNewTodo = (task) => {
  return ({
    type: 'ADD_NEW_TODO',
    payload: task
  });
};

export const deleteTodo = (task) => {
  console.log('deleteTodo');
  return ({
    type: 'DELETE_TODO',
    payload: task
  });
};

