import { ADD_TODO, DELETE_TODO } from "../types";
import store from "../store";

export const addTodo = (todo) => {
    const currentTodos = store.getState().todos
    const newTodos = [...currentTodos, todo]
    return {
        type: ADD_TODO,
        payload: newTodos
    }
}

export const deleteTodo = (todo) => {
    const currentTodos = store.getState().todos
    const newTodos = currentTodos.filter(item => item.title !== todo.title)
    return {
        type: DELETE_TODO,
        payload: newTodos
    }
}