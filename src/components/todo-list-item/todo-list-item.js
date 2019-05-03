import React, { Component } from 'react';

export default class TodoListItem extends Component {

    constructor() {
        super();
    }
    render() {
        const {label, important, done, onDeleted, onToggleImportant, onToggleDone} = this.props;

        let classesForSpan = 'c-todo-list__item-inner';
        if ( done ) {
            classesForSpan += ' done'
        }
        if ( important ) {
            classesForSpan += ' important'
        }

        return (
            <span className={ classesForSpan }>
            <span
                className="c-todo-list__item-label"
                onClick={ onToggleDone}>
                { label }
            </span>
            <button type="button"
                    className="btn btn-outline-success u-float-right"
                    onClick = { onToggleImportant }>
                <i className="fas fa-exclamation"></i>
            </button>
            <button type="button"
                    className="btn btn-outline-danger u-float-right"
                    onClick={onDeleted}>
                <i className="far fa-trash-alt"></i>
            </button>
        </span>
        );
    }
}