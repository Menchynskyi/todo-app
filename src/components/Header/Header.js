import React from 'react';
import ItemsCounter from '../ItemsCounter/ItemsCounter';
import './Header.scss';

const Header = ({ doneCounter, todoCounter, importantCounter, items }) => {
    return (
        <div className="header">
            <span className="logo">Todo App</span>
            <ItemsCounter doneCounter={doneCounter}
                          todoCounter={todoCounter}
                          importantCounter={importantCounter}
                          items={items}/>            
        </div>
    )
}

export default Header;