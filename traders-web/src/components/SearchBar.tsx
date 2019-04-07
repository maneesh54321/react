import React from 'react';
import axios from 'axios';

import './SearchBar.css';

export default class SearchBar extends React.Component {
    state = {
        searchText: '',
        searchSuggestions: [],
        clients: [],
        traders: [],
        shouldShowSuggestions: false
    };

    handleSearchTextChange = (event: any) => {
        if (event.target.value.length > 1) {
            this.setState({
                searchText: event.target.value
            });
            (async () => {
                let clientsResponse =
                    await axios.get('https://e826182a-0376-4a69-a297-5d149097be02.mock.pstmn.io/clients?searchText=ma');
                let tradersResponse =
                    await axios.get('https://e826182a-0376-4a69-a297-5d149097be02.mock.pstmn.io/traders?searchText=ma');
                let temp: any[] = [];
                clientsResponse.data.clients.forEach((client: any) => {
                    temp.push({
                        name: client.name,
                        isClient: true
                    });
                });
                tradersResponse.data.traders.forEach((trader: any) => {
                        temp.push({
                            name: trader.name,
                            isClient: false
                        });
                    }
                );
                this.setState({
                    searchSuggestions: temp,
                    clients: clientsResponse.data.clients,
                    traders: tradersResponse.data.traders,
                    shouldShowSuggestions: true
                });
            })();
        } else {
            this.setState({
                shouldShowSuggestions: false,
                searchText: event.target.value
            });
        }
    };

    render() {
        let searchSuggestions;
        if(this.state.shouldShowSuggestions){
            let filteredSearchSuggestion = this.state.searchSuggestions
                .filter(
                    (suggestion: any) => suggestion.name.toLowerCase().includes(this.state.searchText.toLowerCase())
                );
            console.log(filteredSearchSuggestion);
            searchSuggestions = <div className="search-suggestions">
                <div className="list-group">
                    {
                        filteredSearchSuggestion
                            .map((suggestion: any, index) => (
                                    <button type="button" key={index} className="list-group-item list-group-item-action">
                                        {
                                            suggestion.name.split(this.state.searchText)
                                                .reduce(
                                                    (accumulator: string, curr: string, index: number) =>
                                                        ([accumulator, <strong key={index}>{this.state.searchText}</strong>, curr])
                                                )
                                        }
                                    </button>
                                )
                            )
                    }
                </div>
            </div>;
        }
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state.searchText}
                        onChange={this.handleSearchTextChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                {this.state.shouldShowSuggestions ? searchSuggestions : ''}
            </div>
        );
    }
}