/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import List from './List';
import '../index.css';

class ListItem extends Component {

    eachItem = (item) => 
        <List key={item.id} 
            id={item.id} 
            img={item.img} 
            title={item.title} 
            />

    render() {
        const data = this.props.data;

        return <ul className='list-group'>
                    {data.map(this.eachItem)}
                </ul>
    }
}

export default ListItem;