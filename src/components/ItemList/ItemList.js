import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';

import './ItemList.scss';

const ItemList = (props) => {
  const { onClickDone, onClickImportant, onClickDelete, allItems, visibleItems } = props;

  const renderElements = (arr) => {
    return arr.map(({ label, id, done, important }) => {
      let styles = '';
      if (done) styles += ' done-item';
      if (important) styles += ' important-item';
      return (
        <li key={id}>
          <span className={styles}>{label}</span>
          <div className="buttons-group">
            <i
              className="fa fa-check-square done"
              onClick={() => onClickDone(id)}
            />
            <i
              className="fa fa-exclamation-circle important"
              onClick={() => onClickImportant(id)}
            />
            <i
              className="fa fa-trash delete"
              onClick={() => onClickDelete(id, allItems)}
            />
          </div>
        </li>
      );
    });
  };

  const items = renderElements(visibleItems);

  let message = visibleItems.length === 0 ?
    <Message text="It's time to add a new todo!" /> :
    null;

  if (visibleItems.length === 0 && allItems.length > 0) {
    message = <Message text="No such todos" />
  };

  return (
    <div className="item-list">
      <ul>
        {message}
        {items}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  onClickDone: PropTypes.func,
  onClickImportant: PropTypes.func,
  onClickDelete: PropTypes.func,
  allItems: PropTypes.arrayOf(PropTypes.object),
  visibleItems: PropTypes.arrayOf(PropTypes.object)
};

export default ItemList;