    import React, { Component } from 'react';

import './item-add-from.css';

export default class ItemAddForm extends Component {

    constructor(){
        super();
        this.state = {
          label: ''
        };
        this.onInputChange = (e) =>{
            this.setState({
                label: e.target.value
            });
        };
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form className="input-group mb-3 c-item-add-form"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       placeholder="Add item"
                       onChange={this.onInputChange}
                       value={this.state.label}/>
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                            id="button-addon2">
                            Add item
                        </button>
                    </div>
            </form>
        );
    }
}