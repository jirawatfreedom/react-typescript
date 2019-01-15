import { ADD_TODO_LIST } from "../types/toDo";
import { ToDoAction } from "../actions/toDo";
const initialState = {
  toDoList: []
};
export interface ToDo {
  title: String;
  type?: String;
}
export interface ToDoState {
  toDoList: Array<ToDo>;
}
export const toDoReducer = (
  state: ToDoState = initialState,
  action: ToDoAction
): ToDoState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO_LIST:
      return {
        toDoList: [...state.toDoList, payload]
      };
    default:
      return state;
  }
  return state;
};
