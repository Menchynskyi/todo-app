import React from 'react';
import PropTypes from 'prop-types';

import './SearchPanel.scss';

const SearchPanel = ({ onSearch, searchValue }) => {
  return (
    <form className="search-panel">
      <input
        type="text"
        name="todos"
        placeholder="Search your todos..."
        onChange={(e) => onSearch(e)}
        value={searchValue}
      >
      </input>
    </form>
  );
};

SearchPanel.propTypes = {
  onSearch: PropTypes.func,
  searchValue: PropTypes.string
};

export default SearchPanel;