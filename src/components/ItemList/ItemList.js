import React, { Component } from 'react';
import Message from '../Message/Message';

import './ItemList.scss';

export default class ItemList extends Component {
    
    renderElements(arr) {
        return arr.map(({ label, id, done, important }) => {
            let styles = '';
            if(done) styles += ' done-item';
            if (important) styles += ' important-item';
            
            const { onClickDone, onClickImportant, onClickDelete, allItems } = this.props;

            return (
                <li key={id}>
                        <span className={styles}>{label}</span>
                        <div className="buttons-group">
                            <i className="fas fa-check-square done"
                                onClick={() => onClickDone(id)} />
                            <i className="fa fa-exclamation-circle important"
                                onClick={() => onClickImportant(id)}/>
                            <i className="fas fa-trash-alt delete"
                                onClick={() => onClickDelete(id, allItems)}/>
                        </div>
                </li>
            )
        })
    }

    render(){
        const {visibleItems, allItems} = this.props;
        const items = this.renderElements(visibleItems);

        let message = visibleItems.length === 0 ? <Message 
                                                            text="It's time to add a new todo!"/>
                                                            : null;

        if (visibleItems.length === 0 && allItems.length > 0) {
            message = <Message text="No such todos"/>
        }
        
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