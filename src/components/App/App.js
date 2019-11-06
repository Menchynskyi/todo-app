import React, { Component } from 'react';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import AddForm from '../AddForm/AddForm';
import StatusFilter from '../StatusFilter/StatusFilter';
import './App.scss';
import SearchPanel from '../SearchPanel/SearchPanel';

export default class App extends Component {
    state = {
        todos: [],
        id: 100,
        customLabel: '',
        status: 'All',
        search: ''
    }

    componentDidMount = () => {
        if (JSON.parse(localStorage.getItem('todos')) !== null) {
            localStorage.getItem('todos') && this.setState({
                todos: JSON.parse(localStorage.getItem('todos')),
                id: JSON.parse(localStorage.getItem('id'))
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        }
        if (prevState.todos.length !== this.state.todos.length) {
            this.setState(({ id }) => {
                return {
                    id: id + 1
                }
            });
            localStorage.setItem('id', JSON.stringify(this.state.id));
        }
    }

    searchFilter = (arr, search) => {
        return arr.filter(el => el.label.toLowerCase().includes(search.toLowerCase()))
    }

    onSearch = (e) => {
        this.setState({ search: e.target.value })
    }

    addElement = (label) => {
        if (!label || label.length > 35) return;
        this.setState(({todos}) => {
            return {
                todos: [...todos, this.createElement(label)]
            }
        })
    }

    createElement = (labelName = 'New Todo Item') => {
        return {
            id: this.state.id,
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
        this.setState({todos: newArr})
    }

    onFilterChange = (name) => {
        this.setState({
            status: name
        })
    }
    
    filterItems(items, filter) {
        if (filter === 'All') {
            return items;
        } else if (filter === 'Current') {
            return items.filter((item) => !item.done);
        } else if (filter === 'Done') {
            return items.filter((item) => item.done);
        }
      }

    render() {
        const { todos, status, search } = this.state;
        const visibleItems = this.searchFilter(this.filterItems(todos, status), search);
        const doneCounter = todos.filter(el => el.done).length;
        const todoCounter = todos.filter(el => !el.done).length;
        const importantCounter = todos.filter(el => !el.done && el.important).length;

        return (
            <div className="app">
                <Header doneCounter={doneCounter}
                        todoCounter={todoCounter}
                        importantCounter={importantCounter}
                        items={todos}/>
                <div className="status-panel">
                    <SearchPanel onSearch={this.onSearch}
                                 searchValue={search}/>
                    <StatusFilter status={this.state.status}
                                  onFilterChange={this.onFilterChange}/>
                </div>
                <ItemList visibleItems={visibleItems}
                          allItems={todos}
                          onClickDone={this.onDone}
                          onClickImportant={this.onImportant}
                          onClickDelete={this.deleteItem}
                          status={this.state.status}/>
                <div className="add-elements">
                    <AddForm onItemAdded={this.addElement}/>
                </div>
            </div>
        )
    }
}