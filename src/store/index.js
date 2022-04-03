import { createStore } from 'redux';
import reducer from '../reducer';

const initialState = {
    todos: [
        {
            index: 1,
            title: 'learning frontend',
            description: 'learn how to use html css js'
        },
        {
            index: 2,
            title: 'learning frontend framework',
            description: 'learn how to use react'
        }
    ]
}

const store = createStore(
    reducer,
    initialState
)

export default store