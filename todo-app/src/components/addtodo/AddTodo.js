import React from 'react';

const AddTodo = (props) => {
    const [todo, setTodo]  = React.useState({description:''});
    const handleSubmit = (event) => {
        event.preventDefault();
        todo.status = "In Progress";
        todo.createdAt = new Date();
        props.onClick(todo);
    }
    return (
        <form className="input-group" onSubmit={handleSubmit}>
            <input type="text"
                   name="" id=""
                   className="form-control"
                   value={todo.description}
                   onChange={event => setTodo({description:event.target.value})}
            />
            <div className="input-group-append">
                <button  className="btn btn-primary" type="submit">Add Todo</button>
            </div>
        </form>
    );
}

export default AddTodo;