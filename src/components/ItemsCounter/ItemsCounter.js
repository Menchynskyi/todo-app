import React from 'react';
import PropTypes from 'prop-types';

import './ItemsCounter.scss';

const ItemsCounter = ({ doneCounter, todoCounter, importantCounter, items }) => {
  let todo = '';

  if (todoCounter > 0) {
    todo = `To do: ${todoCounter}, done: ${doneCounter}`;
  };
  if (importantCounter > 0) {
    todo = `To do: ${todoCounter}, important: ${importantCounter}, done: ${doneCounter}`
  };
  if (todoCounter === 0) {
    todo = `All done: ${doneCounter}`
  };
  if (items.length === 0) {
    todo = null
  };

  return (
    <span className="items-counter">
      {todo}
    </span>
  );
};

ItemsCounter.propTypes = {
  doneCounter: PropTypes.number,
  todoCounter: PropTypes.number,
  importantCounter: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ItemsCounter;