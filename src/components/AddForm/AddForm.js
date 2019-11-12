import React, { useState } from 'react';

import './AddForm.scss';

const AddForm = ({ onItemAdded }) => {
    const [customLabel, setCustomLabel] = useState('');

    const onInput = (e) => {
        setCustomLabel(e.target.value);
    }

    const onLabelSubmit = (e) => {
        e.preventDefault();
        setCustomLabel('');
        onItemAdded(customLabel);
    }

    return (
        <form className="add-form"
                onSubmit={onLabelSubmit}>
            <input type="text"
                    placeholder="What needs to be done" 
                    onChange={(e) => onInput(e)}
                    value={customLabel}/>
            
        <button type="submit"
                className="add-button">Add</button>
        </form>
    );
};

export default AddForm;