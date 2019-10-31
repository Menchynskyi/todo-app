import React from 'react';

import './SearchPanel.scss';

const SearchPanel = ({ onSearch, searchValue }) => {
        return (
            <form className="search-panel">
                <input type="text"
                       name="todos"
                       placeholder="Search your todos..."
                       onChange={(e) => onSearch(e)}
                       value={searchValue}
                       >
                </input>
            </form>
        )
}

export default SearchPanel;