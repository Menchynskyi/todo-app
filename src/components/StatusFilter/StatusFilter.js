import React, {Component} from 'react';

import './StatusFilter.scss';

export default class StatusFilter extends Component {
    state = {
        buttons: [
            {name: 'All'},
            {name: 'Current'},
            {name: 'Done'}
        ]
    }

    renderButtons(arr) {

        return arr.map(({ name }) => {
            const isActive = this.props.status === name;
            const statusStyle = isActive ? 'current' : '';

            return (
                <button className={statusStyle}
                        key={name}
                        onClick={() => this.props.onFilterChange(name)}>
                    {name}
                </button>
            )
        })
    }

    render() {
        const buttons = this.renderButtons(this.state.buttons);

        return (
            <div className="status-filter">
                {buttons}
            </div>
        )
    }
}