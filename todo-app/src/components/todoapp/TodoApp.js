import React from 'react';

import AddTodo from "../addtodo/AddTodo";

const testData = [
    {"description": "Learn React", "status": "In Progress", "createdAt":"03-04-2019"},
    {"description": "Learn Redux", "status": "In Progress", "createdAt":"03-04-2019"},
    {"description": "Learn Routing", "status": "In Progress", "createdAt":"03-04-2019"}
];

const TodoApp = (props) => {

    const [todos, setTodos] = React.useState(testData);

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div className="container mt-3">
            <AddTodo onClick={handleAdd}/>
            <h3 className="mt-5">Todo  List</h3>
            <table className="table mt-3">
                <thead>
                <tr>
                    <th scope="col">Todo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo => (
                        <tr key={todo.description}>
                            <td>{todo.description}</td>
                            <td>{todo.status}</td>
                            <td>{todo.createdAt}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default TodoApp;