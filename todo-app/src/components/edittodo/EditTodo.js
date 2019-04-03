import React from 'react';

const EditTodo = (props) => {
    const handleCancel = (event) => {
        props.history.push("/todos");
    }
    return (
        <form>
            <h3>Edit Todo</h3>
            <div className="form-group mt-3">
                <label>Todo description</label>
                <input type="text" name="todo" id="todo" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Status</label>
                <input type="text" name="status" id="status"  className="form-control"/>
            </div>
            <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-success ml-2">Update</button>
        </form>
    );
}

export default EditTodo;