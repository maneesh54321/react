import * as actionType from './actions';

const initialState = {
    todos: [
        {description: "Learn React", status: "In Progress", createdAt: new Date()},
        {description: "Learn Redux", status: "In Progress", createdAt: new Date()},
        {description: "Learn Routing", status: "In Progress", createdAt: new Date()}
    ]
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionType.ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        case actionType.REMOVE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return {
                todos: [...newTodos]
            };
        case actionType.UPDATE_TODO:
            const todos = [...state.todos];
            todos[action.payload.index] = {...state.todos[action.payload.index],  ...action.payload.todo};
            return
        default:
            return state;
    }
};

export default reducer;