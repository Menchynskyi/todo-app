import React from 'react';
import ItemsCounter from '../ItemsCounter/ItemsCounter';
import './Header.scss';

const Header = ({ doneCounter, todoCounter }) => {
    return (
        <div className="header">
            <span className="logo">Todo App</span>
            <ItemsCounter doneCounter={doneCounter}
                          todoCounter={todoCounter}/>            
        </div>
    )
}

export default Header;