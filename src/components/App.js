import React, { Component } from 'react';
import ListItem from './ListItem';
import '../index.css';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {data: this.props.data}
  }

  update = value => {
    const state = this.props.data;
    const newState = state.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      data: newState
    });
  }

  render() {
    return <div className='container'>
      <SearchBar state={this.props.data} update={this.update}/>
      <ListItem data={this.state}/>
    </div>
  }
}

export default App;
