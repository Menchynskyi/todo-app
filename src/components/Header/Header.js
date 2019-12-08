import React from 'react';
import ItemsCounter from '../ItemsCounter/ItemsCounter';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ doneCounter, todoCounter, importantCounter, items }) => {
  return (
    <div className="header">
      <span className="logo">
        Todo App
      </span>
      <ItemsCounter
        doneCounter={doneCounter}
        todoCounter={todoCounter}
        importantCounter={importantCounter}
        items={items}
      />
    </div>
  );
};

Header.propTypes = {
  doneCounter: PropTypes.number,
  todoCounter: PropTypes.number,
  importantCounter: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default Header;