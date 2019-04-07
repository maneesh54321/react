import React from 'react';
import SearchBar from "../components/SearchBar";

import './Home.css';

export default class Home extends React.Component {
    render () {
        return (
            <div className="d-sm-flex justify-content-center home-container">
                <SearchBar/>
            </div>
        );
    }
}