import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import TodoApp from "./components/todoapp/TodoApp";
import EditTodo from "./components/edittodo/EditTodo";

const routing = (
    <BrowserRouter>
        <div className="container">
            <Route path="/todos" exact component={TodoApp} />
            <Route path="/todos/:id/edit" component={EditTodo} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
