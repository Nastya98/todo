import React, { Component } from 'react';

//components
import AppHeader from '../app-header';
import SearchPanel from '../search-app';
import ToDoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class App extends Component {

    maxId = 100;

    constructor() {
        super();
        this.state = {
            todoData: [
                this.createItem('Drink coffee'),
                this.createItem('Build React App'),
                this.createItem('Eat chocolate')
            ],
            searchText: '',
            filter: 'all' 
        };
    };

    createItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = this.findIndex(id, todoData);
            const after_index = todoData.slice(0, index);
            const before_index = todoData.slice(index + 1);
            const newToDoData = [...after_index, ...before_index];
            return {
                todoData: newToDoData
            }
        });
    };
    addItem = (text) => {
        if (text.length === 0) return;
        const newItem = this.createItem(text);
        this.setState(({ todoData }) => {
            const newToDoData = [...todoData, newItem];
            return {
                todoData: newToDoData
            }
        });
    };
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'important')
            };
        });
    };
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'done')
            };
        });
    };
    onToggleProperty (arr, id, propName){
        const index = this.findIndex(id, arr);
        const oldItem = arr[index];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        const newToDoData = [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
        return newToDoData
    };
    findIndex = (id, todoData) => {
        const index = todoData.findIndex((el) => el.id === id);
        return index;
    };
    searchItems = (arr, searchText) => {
        if (searchText.length === 0) return arr;
        return arr.filter((el) => {
           return el.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        });
    };
    onSearchChange = (searchText) => {
      this.setState({ searchText });
    };
    onFilterChange = (filter) => {
        this.setState({ filter })
    };
    changeFilter = (arr, filter) => {
        switch(filter){
            case 'all':
                return arr;
            case 'active':
                return arr.filter((el) => !el.done);
            case 'done':
                return arr.filter((el) => el.done);
            default:
                return arr;
        }
    };

    render() {

        const { todoData, searchText, filter } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const toDoCount = todoData.length - doneCount;
        const visibleItems = this.changeFilter(
            this.searchItems(todoData, searchText), filter
        );

        return (
            <div className="l-todo-app">
                <AppHeader
                    toDo={toDoCount}
                    done={doneCount}
                />
                <div className="c-search-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                    />
                    <ItemStatusFilter
                        filter={ filter }
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <ToDoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm
                    onItemAdded={ this.addItem }/>

            </div>
        )
    }

};