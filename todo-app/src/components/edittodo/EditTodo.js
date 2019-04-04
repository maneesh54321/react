import React from 'react';
import { withRouter } from 'react-router-dom';

const EditTodo = (props) => {
    const index = props.match.params.id;
    const [state, setState] = React.useState( {...props.todos[index]});

    const handleCancel = () => {
        props.history.push("/todos");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateTodo(index, state);
        props.history.push("/todos");
    };

    const handleDescChange = (event) => {
        console.log(event.target.value);
        setState({...state, description : event.target.value});
    };

    function handleStatusChange(event) {
        console.log(event.target.value);
        setState({...state, status : event.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Todo Index: {props.match.params.id}</h3>
            <div className="form-group mt-3">
                <label>Todo description</label>
                <input type="text"
                       id="todo"
                       className="form-control"
                       value={state.description}
                       onChange={handleDescChange}/>
            </div>
            <div className="form-group">
                <label>Status</label>
                <select
                        id="status"
                        className="form-control"
                        value={state.status}
                        onChange={handleStatusChange}
                        required >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-success ml-2">Update</button>
        </form>
    );
};

export default withRouter(EditTodo);