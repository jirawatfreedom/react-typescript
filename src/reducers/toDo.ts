const initialState ={
    toDoList:[]
}
export interface ToDo {
    title: String;
    type?: String;
}
export interface ToDoState {
    toDoList: Array<ToDo>;
}
export const toDoReducer = 
(state: ToDoState = initialState, action: object)
: ToDoState => {
    return state;
}