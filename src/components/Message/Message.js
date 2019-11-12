import React from 'react';

import './Message.scss';

const Message = ({ text }) => {
    return (
        <span className="message">
            <i className="fa fa-pencil-square"/>
            {text}
        </span>
    );
}

export default Message;