import React from 'react';

import './ItemsCounter.scss';

const ItemsCounter = ({ doneCounter, todoCounter, importantCounter, items }) => {
    let todo = '';
    if (todoCounter > 0) {
        todo = `To do: ${todoCounter}, done: ${doneCounter}`;
    }
    if (importantCounter > 0) {
        todo = `To do: ${todoCounter}, important: ${importantCounter}, done: ${doneCounter}`
    }
    if (todoCounter === 0) {
        todo = `All done: ${doneCounter}`
    }
    if (items.length === 0) {
        todo = null
    }
    
    return (
        <span className="items-counter">
            {todo}
        </span>
    )
}

export default ItemsCounter;