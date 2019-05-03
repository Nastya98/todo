import React from 'react';
import ToDoListItem from '../todo-list-item';

import './todo-list.css';

const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => { 
    const elements = todos.map((element) => {
        const { id, ...elementProps } = element;
        return (
            <li key={id} className="list-group-item c-todo-list__item">
                <ToDoListItem
                    { ...elementProps }
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id) }
                />
            </li>
        );
    });
    return (
        <ul className="list-group c-todo-list">
            { elements }
        </ul>
    );
};

export default ToDoList;