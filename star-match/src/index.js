import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarMatch from './StarMatch';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<StarMatch />, document.getElementById('root'));	

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
