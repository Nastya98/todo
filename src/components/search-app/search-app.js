import React, { Component } from 'react';
import './search-app.css';

export default class SearchPanel extends Component{

    constructor(){
        super();
        this.state = {
            searchText: ''
        }
    }

    onSearchChange = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText });
        this.props.onSearchChange(searchText);
    };

    render() {
        const placeholder = 'Search...';
        const { searchText } = this.state;
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder={placeholder}
                value={ searchText }
                onChange={this.onSearchChange}
            />
        );
    }
};