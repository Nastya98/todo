import React from 'react';

import './app-header.css';

const AppHeader = ( {toDo, done} = this.props ) => {
    return (
        <div className="c-app-header d-flex justify-content-between align-items-baseline">
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;