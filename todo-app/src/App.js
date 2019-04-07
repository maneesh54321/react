import React from 'react';
import {Route} from 'react-router';
import {connect} from "react-redux";

import * as actionTypes from "./store/actions";
import TodoApp from "./components/todoapp/TodoApp";
import EditTodo from "./components/edittodo/EditTodo";

const App = (props) => {
    return (
        <div className="container mt-5">
            <Route
                path="/todos"
                exact
                render={() => (<TodoApp {...props}/>)}/>
            <Route path="/todos/:id/edit" render={() => <EditTodo {...props} />}/>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => {
            dispatch({
                type: actionTypes.ADD_TODO,
                payload: todo
            });
        },
        removeTodo: (index) => {
            dispatch({
                type: actionTypes.REMOVE_TODO,
                payload: index
            })
        },
        updateTodo: (index, todo) => {
            dispatch({
                type: actionTypes.UPDATE_TODO,
                payload: {
                    index,
                    todo
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);