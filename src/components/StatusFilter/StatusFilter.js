import React from 'react';
import PropTypes from 'prop-types';

import './StatusFilter.scss';

const StatusFilter = ({ status, onFilterChange }) => {
  const buttonsNames = [
    { name: 'All' },
    { name: 'Current' },
    { name: 'Done' }
  ];

  const renderButtons = (arr) => {
    return arr.map(({ name }) => {
      const isActive = status === name;
      const statusStyle = isActive ? 'current' : '';

      return (
        <button className={statusStyle}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {name}
        </button>
      );
    });
  };

  const buttons = renderButtons(buttonsNames);

  return (
    <div className="status-filter">
      {buttons}
    </div>
  );
};

StatusFilter.propTypes = {
  status: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired
};

export default StatusFilter;