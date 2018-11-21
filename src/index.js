import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/data';
import App from './components/App';


ReactDOM.render(<App data={data} />, document.getElementById('root'));

