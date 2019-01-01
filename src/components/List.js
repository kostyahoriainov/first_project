/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <li className='list-item list-group-item'>
                <h2>{this.props.title}</h2>
                <div className='img-box'>
                    <img src={this.props.img} 
                        alt={this.props.title}/>
                </div>
            </li>
        )
    }
}

export default List