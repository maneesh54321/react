import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router";

import './App.css';

import Home from './containers/Home';
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <div className="container">
                    <Switch>
                        <Route name="home" path="/home" exact component={Home} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
