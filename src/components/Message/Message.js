import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

const Message = ({ text }) => {
  return (
    <span className="message">
      <i className="fa fa-pencil-square" />
      {text}
    </span>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;