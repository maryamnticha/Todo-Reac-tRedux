import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../types";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, iscomplete: !todo.iscomplete }
            : todo
        )
      };
    default:
      return state;
  }
};
export default todoReducer;
