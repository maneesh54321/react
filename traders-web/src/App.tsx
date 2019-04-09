import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router";

import './App.css';

import Home from './containers/Home';
import Header from "./components/Header";
import ClientDetails from "./containers/ClientDetails";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/client/:id" component={ClientDetails} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default App;
