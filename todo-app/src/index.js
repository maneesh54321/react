import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";
import reducer from "./store/reducer";

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));