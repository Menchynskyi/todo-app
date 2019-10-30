import React, { Component } from 'react';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import './App.scss';
import AddForm from '../AddForm/AddForm';

export default class App extends Component {
    _id = 100;

    state = {
        todos: [],
        customLabel: ''
    }

    componentDidMount = () => {
        const defaultItems = [
            this.createElement('Drink Cofee'),
            this.createElement('Build React App'),
            this.createElement('Become a Senior')
        ]

        this.setState({todos: defaultItems})
    }

    addElement = (label) => {
        if (!label) return;
        this.setState(({todos}) => {
            return {
                todos: [...todos, this.createElement(label)]
            }
        })
    }

    createElement = (labelName = 'New Todo Item') => {
        this._id++;
        return {
            id: this._id,
            label: labelName,
            important: false,
            done: false
        }
    }
    
    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[idx];
        const value = !oldItem[propName];
    
        const item = { ...arr[idx], [propName]: value } ;
        return [
          ...arr.slice(0, idx),
          item,
          ...arr.slice(idx + 1)
        ];
      };

    onDone = (id) => {
        this.setState(({ todos }) => {
            const newTodos = this.toggleProperty(todos, id, 'done');

            return {
                todos: newTodos
            }
        })
    }

    onImportant = (id) => {
        this.setState(({ todos }) => {
            const newTodos = this.toggleProperty(todos, id, 'important');

            return {
                todos: newTodos
            }
        })
    }

    deleteItem = (id, arr) => {
        const idx = arr.findIndex((item) => item.id === id);
        const newArr = [
            ...arr.slice(0, idx),
            ...arr.slice(idx + 1)
        ];
        this.setState(({ todos }) => {
            return {
                todos: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <ItemList todos={this.state.todos}
                          onClickDone={this.onDone}
                          onClickImportant={this.onImportant}
                          onClickDelete={this.deleteItem}/>
                <div className="add-elements">
                    <AddForm onItemAdded={this.addElement}/>
                </div>
            </div>
        )
    }
}