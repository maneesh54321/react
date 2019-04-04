import React from 'react';
import { withRouter } from 'react-router-dom';

import AddTodo from "../addtodo/AddTodo";

const TodoApp = (props) => {

    const handleAdd = (todo) => {
        props.addTodo(todo);
    };

    const handleEdit = (todoIndex) => {
        props.history.push(`/todos/${todoIndex}/edit`);
    };

    function handleDelete(index) {
        props.removeTodo(index);
    }

    return (
        <div>
            <AddTodo onClick={handleAdd}/>
            <h3 className="mt-5">Todo List</h3>
            <table className="table mt-3">
                <thead>
                <tr>
                    <th scope="col">Todo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col"/>
                </tr>
                </thead>
                <tbody>
                {
                    props.todos.map((todo, index) => (
                        <tr key={todo.description}>
                            <td>{todo.description}</td>
                            <td>{todo.status}</td>
                            <td>{todo.createdAt.toLocaleDateString()}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => handleEdit(index)}
                                >Edit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger ml-3"
                                    onClick={() => handleDelete(index)}
                                >Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default withRouter(TodoApp);