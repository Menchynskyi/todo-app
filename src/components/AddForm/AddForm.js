import React, { useState } from 'react';

import './AddForm.scss';

const AddForm = ({ onItemAdded }) => {
    const [customLabel, setCustomLabel] = useState('');
    const [validation, setValidation] = useState({ class: '', placeholder: 'What needs to be done' });

    const onInput = (e) => {
        setCustomLabel(e.target.value);
    }

    const onLabelSubmit = (e) => {
        e.preventDefault();
        setValidation({ class: '', placeholder: 'What needs to be done'});

        if (customLabel.length === 0) {
            setValidation({ class: 'not-validated', placeholder: 'Field is empty, please enter your todo' });
            setCustomLabel('');
        } else if (customLabel.length > 25) {
            setValidation({ class: 'not-validated', placeholder: '' });
        } else {
            onItemAdded(customLabel);
            setCustomLabel('');
        }
    }

    return (
        <form className="add-form"
                onSubmit={onLabelSubmit}>
            <input  className={validation.class}
                    type="text"
                    placeholder={validation.placeholder} 
                    onChange={(e) => onInput(e)}
                    value={customLabel}/>
            
        <button type="submit"
                className="add-button">Add</button>
        </form>
    );
};

export default AddForm;