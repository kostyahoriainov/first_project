/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {

    onUpdate = () => {
        this.props.update(this.searchValue.value);
    }

    render() {
        return (<div className='form-group'>
            <input className='form-control' type='text' ref={search => { this.searchValue = search }} onKeyUp={this.onUpdate} />
            </div>)
    }
}

export default SearchBar;