/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {



    render() {
        return (<div className='form-group'>
            <input className='form-control' type='text' ref={search => { this.searchValue = search }} onKeyUp={() => this.props.search(this.searchValue.value)} />
            </div>)
    }
}

export default SearchBar;