import React, { Component } from 'react';

import './ItemList.scss';

export default class ItemList extends Component {
    
    renderElements(arr) {
        return arr.map(({ label, id, done, important }) => {
            let status = '';
            if(done) status += ' done-item';
            if (important) status += ' important-item';
            const { onClickDone, onClickImportant, onClickDelete, todos } = this.props;

            return (
                <li key={id}>
                        <span className={status}>{label}</span>
                        <div className="buttons-group">
                            <i className="fas fa-check-square done"
                                onClick={() => onClickDone(id)} />
                            <i className="fa fa-exclamation-circle important"
                                onClick={() => onClickImportant(id)}/>
                            <i className="fas fa-trash delete"
                                onClick={() => onClickDelete(id, todos)}/>
                        </div>
                </li>
            )
        })
    }

    render(){
        const {todos} = this.props;
        const items = this.renderElements(todos);

        const message = todos.length === 0 ? <span className="message">
                                                <i className="fas fa-pen-square"/>
                                                It's time to add new todo!
                                             </span> : null;

        return (
            <div className="item-list">
                <ul>
                    {message}
                    {items}
                </ul>
            </div>
        )
    }
}