import React from 'react';

import './ItemsCounter.scss';

const ItemsCounter = ({ doneCounter, todoCounter }) => {
    const todo = todoCounter > 0 ? `To do: ${todoCounter}, done: ${doneCounter}`
                                 : `All yours todo are done: ${doneCounter}`
    return (
        <span className="items-counter">
            {todo}
        </span>
    )
}

export default ItemsCounter;