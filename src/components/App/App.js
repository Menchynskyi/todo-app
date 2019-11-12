import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import AddForm from '../AddForm/AddForm';
import StatusFilter from '../StatusFilter/StatusFilter';
import './App.scss';
import SearchPanel from '../SearchPanel/SearchPanel';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(100);
    const [status, setStatus] = useState('All');
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        if (localStorage.getItem('todos') !== null || localStorage.getItem('id') !== null){
            setTodos(JSON.parse(localStorage.getItem('todos')));
            setId(JSON.parse(localStorage.getItem('id')));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('id', JSON.stringify(id));
    }, [id, todos]);

    const searchFilter = (arr, search) => {
        return arr.filter(el => el.label.toLowerCase().includes(search.toLowerCase()));
    }

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    const addElement = (label) => {
        if (!label || label.length > 35) return;
        setTodos([...todos, createElement(label)])
    }

    const createElement = (labelName = 'New Todo Item') => {
        setId(id + 1);
        return {
            id,
            label: labelName,
            important: false,
            done: false
        }
    }
    
    const toggleProperty = (arr, id, propName) => {
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

    const onDone = (id) => {
        setTodos(toggleProperty(todos, id, 'done'));
    }

    const onImportant = (id) => {
        setTodos(toggleProperty(todos, id, 'important'));
    }

    const deleteItem = (id, arr) => {
        const idx = arr.findIndex((item) => item.id === id);
        const newArr = [
            ...arr.slice(0, idx),
            ...arr.slice(idx + 1)
        ];
        setTodos(newArr);
    }

    const onFilterChange = (name) => {
        setStatus(name);
    }
    
    const filterItems = (items, filter) => {
        if (filter === 'All') {
            return items;
        } else if (filter === 'Current') {
            return items.filter((item) => !item.done);
        } else if (filter === 'Done') {
            return items.filter((item) => item.done);
        }
    }

    const visibleItems = searchFilter(filterItems(todos, status), search);
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
                <SearchPanel onSearch={onSearch}
                                searchValue={search}/>
                <StatusFilter status={status}
                                onFilterChange={onFilterChange}/>
            </div>
            <ItemList visibleItems={visibleItems}
                        allItems={todos}
                        onClickDone={onDone}
                        onClickImportant={onImportant}
                        onClickDelete={deleteItem}
                        status={status}/>
            <div className="add-elements">
                <AddForm onItemAdded={addElement}/>
            </div>
        </div>
    )
}


export default App;