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
        const itemsList = this.props.itemsList;

        return <ul className='list-group'>
                    {itemsList.map(this.eachItem)}
                </ul>
    }
}

export default ListItem;