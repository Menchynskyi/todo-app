import React from 'react';

import './Message.scss';

const Message = ({ text }) => {
    return (
        <span className="message">
            <i className="fas fa-pen-square"/>
            {text}
        </span>
    );
}

export default Message;