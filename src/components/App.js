import React, { Component } from 'react';
import ListItem from './ListItem';
import '../index.css';
import data from '../data/data.json'
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data,
      searchValue: ''
    };
  }


  search = value => {
    this.setState({ searchValue: value})
  }

  render() {
    const itemsList = this.state.list.filter(item => item.title.toLowerCase().indexOf(this.state.searchValue.toLocaleLowerCase()) === 0 )
    
    return <div className='container'>
      <SearchBar search={this.search}/>
      <ListItem itemsList={itemsList}/>
    </div>
  }
}

export default App;
