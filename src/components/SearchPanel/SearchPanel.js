import React, {Component} from 'react';

import './SearchPanel.scss';

export default class SearchPanel extends Component {
    render() {
        return (
            <form className="search-panel">
                <input type="text"
                       placeholder="Search your todos">
                </input>
            </form>
        )
    }
}