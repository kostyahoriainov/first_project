import React, { Component } from 'react';
import ListItem from './ListItem';
import '../index.css';
import data from '../data/data'
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      searchValue: ''
    };
  }


  update = value => {
    this.setState({ searchValue: value})
  }

  render() {
    const data = this.state.data.filter(item => item.title.toLowerCase().includes(this.state.searchValue))
    
    return <div className='container'>
      <SearchBar update={this.update}/>
      <ListItem data={data}/>
    </div>
  }
}

export default App;
