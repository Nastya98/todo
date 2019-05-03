import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {

    constructor(){
        super();
        this.state = {
            buttons: [
                { name: 'all', label: 'All'},
                { name: 'active', label: 'Active'},
                { name: 'done', label: 'Done'}
            ],
            filter: ''
        }
    }

    render() {

        const { filter, onFilterChange } = this.props;
        const buttons = this.state.buttons.map(({ label, name }) => {
            const isActive = name === filter;
            const activeClass = isActive ? 'btn-info' : 'btn-outline-info';
            console.log(isActive);
            return (
                <button
                    type="button"
                    className={`btn ${activeClass}`}
                    key={name}
                    onClick={() => onFilterChange(name)}>
                    { label }
                </button>
            )
        });

        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
}
