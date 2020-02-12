const initialState = {
  tasks: [],
  isLoading: false
};

const todos = (state = initialState, action) => {
  console.log('action, ', action)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'GET_TODOS':
      return {
        ...state,
        tasks: action.payload
      };

    case 'ADD_NEW_TODO':
      return {
        ...state,
        tasks: [...state.tasks,  action.payload ]
      };

    case 'DELETE_TODO':
      return {
        ...state,
        tasks: [...state.tasks].filter(item => item.id !== action.payload)
      };

    default:
      return state
  }
};

export default todos
