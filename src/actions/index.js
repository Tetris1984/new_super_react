export const getAllTodo = (tasks) => {
  return dispatch =>
    fetch("http://valeriy.com:3005/")
    .then(res => res.json())
    .then(
      (result) => {
        dispatch({
          type: 'GET_TODOS',
          payload: result
        });
      }
    )
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

