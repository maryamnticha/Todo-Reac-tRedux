import { ADD_TODO } from "../types";
import { DELETE_TODO, EDIT_TODO } from "../types";
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
export const editTodo = id => {
  return {
    type: EDIT_TODO,
    payload: id
  };
};
