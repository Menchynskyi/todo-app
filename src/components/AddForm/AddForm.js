import React, {Component} from 'react';

import './AddForm.scss';

export default class AddForm extends Component {
    state = {
        customLabel: ''
    }

    onInput = (e) => {
        this.setState({
            customLabel: e.target.value
        })
    }

    onLabelSubmit = (e) => {
        e.preventDefault();
        const { customLabel } = this.state;
        this.setState({ customLabel: '' });
        this.props.onItemAdded(customLabel);
    }

    render() {
        return (
            <form className="add-form"
                  onSubmit={this.onLabelSubmit}>
                <input type="text"
                       placeholder="What needs to be done" 
                       onChange={(e) => this.onInput(e)}
                       value={this.state.customLabel}/>
                
            <button type="submit"
                    className="add-button">ADD</button>
            </form>
        );
    }
}