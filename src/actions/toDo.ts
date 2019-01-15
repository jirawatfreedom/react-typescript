import { ToDo} from "../reducers/toDo"
import { ADD_TODO_LIST } from '../types/toDo';
export interface ToDoAction {
    type: String;
    payload: ToDo;
}
export const  addToDoList = (toDo: string): ToDoAction => {
    return {
        type:ADD_TODO_LIST,
        payload:{
            title: toDo
        }
    }
}
